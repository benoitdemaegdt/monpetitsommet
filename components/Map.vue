<template>
  <div class="relative">
    <div :id="mapId" class="rounded-lg h-full w-full"></div>
    <SlopeLegend v-if="isSki" id="legend" class="absolute mx-2.5 my-2.5 p-2 bottom-0 left-0" />
  </div>
</template>

<script setup lang="ts">
import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';

import SlopeLegend from '~/components/trek/SlopeLegend.vue';
const config = useRuntimeConfig();
const ignApiKey = config.public.ignApiKey;

const { path } = useRoute();
const { loadImages, addSlopeLayer, addGeojsonLayers, setInitialView } = useMap();

const { id, geojson, options } = defineProps<{
  id?: string;
  geojson?: any;
  options?: {
    location: string[];
    zoom: number;
  };
}>();
const mapId = id || 'map';
const isSki = path.includes('/ski-de-rando/');

onMounted(() => {
  const map = new maplibregl.Map({
    container: `${mapId}`,
    style: {
      version: 8,
      sources: {
        ign: {
          type: 'raster',
          tiles: [
            `https://data.geopf.fr/private/wmts?apikey=ign_scan_ws&layer=GEOGRAPHICALGRIDSYSTEMS.MAPS.SCAN25TOUR&style=normal&tilematrixset=PM&Service=WMTS&Request=GetTile&Version=1.0.0&Format=image/jpeg&TILEMATRIX={z}&TILEROW={y}&TILECOL={x}`
          ],
          tileSize: 256,
          attribution: '&copy; OpenStreetMap Contributors',
          maxzoom: 19,
        },
      },
      layers: [{ id: 'ign', type: 'raster', source: 'ign', minzoom: 0, maxzoom: 22 }],
    },
    center: (options && options.location) || [5.7245, 45.1885],
    zoom: (options && options.zoom) || 11,
    attributionControl: false,
  });
  map.addControl(new maplibregl.NavigationControl({ showCompass: false }), 'top-left');
  map.addControl(new maplibregl.FullscreenControl(), 'top-right');
  map.addControl(new maplibregl.AttributionControl({ compact: true }));

  map.on('load', async () => {
    await loadImages(map, geojson);

    if (isSki) {
      addSlopeLayer(map)
    }

    addGeojsonLayers(map, geojson);

    setInitialView(map, geojson);
  });

  if (geojson) {
    const mainLinestring = geojson.features.find((feature) => feature.geometry.type === 'LineString');
    if (!mainLinestring) return;

    const position = useState('position');
    let marker = new maplibregl.Marker({ color: '#e11d48' });
    watch(position, (newPosition) => {
      const { id, x, y } = newPosition;
      if (!!id && id !== mapId) return;
      if (x === undefined && y === undefined) {
        marker.remove();
      } else {
        const coordinates = mainLinestring?.geometry?.coordinates;
        const [long, lat] = coordinates.find(
          ([_long, _lat, alt, dist]) => x === dist && Math.round(alt) === y,
        );
        marker.setLngLat([long, lat]).addTo(map);
      }
    });
  }
});
</script>

<style>
.maplibregl-slope {
  background-repeat: no-repeat;
  background-position: center;
  pointer-events: auto;
  background-image: url('~/maplibre/slopeControl.svg');
}

.maplibregl-slope-info {
  background-repeat: no-repeat;
  background-position: center;
  pointer-events: auto;
  background-image: url('~/maplibre/slopeInfo.svg');
  background-size: 85%;
}
</style>
