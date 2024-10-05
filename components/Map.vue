<template>
  <div class="relative">
    <div :id="mapId" class="rounded-lg shadow" style="height: 42vh"></div>
    <SlopeLegend v-if="isSki" id="legend" class="absolute mx-2.5 my-2.5 p-2 bottom-0 left-0" />
  </div>
</template>

<script setup>
import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';
import SlopeControl from '~/maplibre/SlopeControl';
import SlopeLegend from '~/components/trek/SlopeLegend.vue';
const config = useRuntimeConfig();
const ignApiKey = config.public.ignApiKey;

const { path } = useRoute();
const { loadImages } = useMap();
const { id, geojson } = defineProps({ id: String, geojson: Object });
const mapId = id || 'map';
const isSki = path.includes('/ski-de-rando/');

const allPointsCoordinates = geojson.features
  .filter((feature) => feature.geometry.type === 'Point')
  .map((feature) => feature.geometry.coordinates.slice(0, 2));
const allLinesCoordinates = geojson.features
  .filter((feature) => feature.geometry.type === 'LineString')
  .map((feature) => feature.geometry.coordinates)
  .reduce((prev, current) => [...prev, ...current.map((coord) => coord.slice(0, 2))], []);
const allCoordinates = [...allPointsCoordinates, ...allLinesCoordinates];
const firstCoordinate = allCoordinates[0];

const position = useState('position');
// main line string (one that = elevationProfile) must be 1st in geojson file
const mainLineString = geojson.features.find((feature) => feature.geometry.type === 'LineString');

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
    center: firstCoordinate,
    zoom: 11,
    attributionControl: false,
  });
  map.addControl(new maplibregl.NavigationControl({ showCompass: false }), 'top-left');
  map.addControl(new maplibregl.FullscreenControl(), 'top-right');
  map.addControl(new maplibregl.AttributionControl({ compact: true }));

  // add geojson layer
  map.on('load', async () => {
    await loadImages(map, geojson);

    if (isSki) {
      map.addSource('calque-pente', {
        type: 'raster',
        tiles: [
          'https://data.geopf.fr/wmts?layer=GEOGRAPHICALGRIDSYSTEMS.SLOPES.MOUNTAIN&style=normal&tilematrixset=PM&Service=WMTS&Request=GetTile&Version=1.0.0&Format=image%2Fpng&TileMatrix={z}&TileCol={x}&TileRow={y}.png',
        ],
        tileSize: 256,
      });
      map.addLayer({
        id: 'calque-pente',
        type: 'raster',
        source: 'calque-pente',
        paint: { 'raster-opacity': 0.7 },
      });

      const slopeControl = new SlopeControl({
        onClick: () => {
          const visibility = map.getLayoutProperty('calque-pente', 'visibility');
          if (visibility === 'none') {
            map.setLayoutProperty('calque-pente', 'visibility', 'visible');
          } else {
            map.setLayoutProperty('calque-pente', 'visibility', 'none');
          }
        },
      });
      map.addControl(slopeControl, 'top-right');
    }

    map.addSource('data', {
      type: 'geojson',
      data: geojson,
    });
    map.addLayer({
      id: 'path',
      type: 'line',
      source: 'data',
      paint: {
        'line-width': 4,
        'line-color': ['get', 'color'],
      },
      filter: ['==', '$type', 'LineString'],
    });
    map.addLayer({
      id: 'start-end',
      type: 'circle',
      source: 'data',
      paint: {
        'circle-radius': 6,
        'circle-color': ['get', 'color'],
      },
      filter: ['==', 'marker', 'circle'],
    });
    map.addLayer({
      id: 'poi',
      type: 'symbol',
      source: 'data',
      layout: {
        'icon-image': ['get', 'icon'],
        'icon-size': 0.5,
      },
      filter: ['has', 'icon'],
    });

    if (allCoordinates.length > 1) {
      const bounds = new maplibregl.LngLatBounds(firstCoordinate, firstCoordinate);
      allCoordinates.map((coord) => bounds.extend(coord));
      map.fitBounds(bounds, { padding: 20 });
    }

    map.on('click', 'poi', (e) => {
      new maplibregl.Popup({ closeButton: false, closeOnClick: true })
        .setLngLat(e.lngLat)
        .setHTML(`<div class="text-sm text-gray-800">${e.features[0].properties.name}</div>`)
        .addTo(map);
    });
    map.on('mouseenter', 'poi', () => (map.getCanvas().style.cursor = 'pointer'));
    map.on('mouseleave', 'poi', () => (map.getCanvas().style.cursor = ''));
  });

  let marker = new maplibregl.Marker({ color: '#e11d48' });
  watch(position, (newPosition) => {
    const { id, x, y } = newPosition;
    if (!!id && id !== mapId) return;
    if (x === undefined && y === undefined) {
      marker.remove();
    } else {
      const coordinates = mainLineString?.geometry?.coordinates;
      const [long, lat] = coordinates.find(
        ([_long, _lat, alt, dist]) => x === dist && Math.round(alt) === y,
      );
      marker.setLngLat([long, lat]).addTo(map);
    }
  });
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
