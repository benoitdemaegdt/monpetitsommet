import maplibregl from 'maplibre-gl';
import SlopeControl from '~/maplibre/SlopeControl';

export const useMap = () => {
  async function loadImages(map, geojson) {
    if (!geojson) return

    const images = geojson.features
      .filter((feature) => feature.geometry.type === 'Point' && !!feature.properties.icon)
      .map((feature) => feature.properties.icon)
      .filter((image, index, images) => images.indexOf(image) === index)

    return Promise.all(
      images.map(async (image) => {
        const res = await loadImage(map, image)
        return map.addImage(image, res)
      })
    )
  }

  function addSlopeLayer(map) {
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

  function addGeojsonLayers(map, geojson) {
    if (!geojson) return

    map.addSource('data', {
      type: 'geojson',
      data: geojson,
    });
    map.addLayer({
      id: 'geojson',
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
    map.on('click', 'poi', (e) => {
      new maplibregl.Popup({ closeButton: false, closeOnClick: true })
        .setLngLat(e.lngLat)
        .setHTML(`<div class="text-sm text-gray-800">${e.features[0].properties.name}</div>`)
        .addTo(map);
    });
    map.on('mouseenter', 'poi', () => (map.getCanvas().style.cursor = 'pointer'));
    map.on('mouseleave', 'poi', () => (map.getCanvas().style.cursor = ''));
  }

  function setInitialView(map, geojson) {
    if (!geojson) return

    const pointFeatures = geojson.features.filter((feature) => feature.geometry.type === 'Point');
    const lineFeatures = geojson.features.filter((feature) => feature.geometry.type === 'LineString');

    // cas 1 - juste un point d'intérêt. Ex: un refuge.
    if (pointFeatures.length === 1 && lineFeatures.length === 0) {
      map.flyTo({
        center: [
          pointFeatures[0].geometry.coordinates[0],
          pointFeatures[0].geometry.coordinates[1],
        ],
      });
    }

    // cas 2 - plusieurs Points. typiquement la liste des refuges.
    if (pointFeatures.length > 1 && lineFeatures.length === 0) {
      const bounds = new maplibregl.LngLatBounds(
        pointFeatures[0].geometry.coordinates,
        pointFeatures[0].geometry.coordinates
      );
      pointFeatures.forEach((feature) => bounds.extend(feature.geometry.coordinates));
      map.fitBounds(bounds, { padding: 20 });
    }

    // cas 3 - au moins une linestring. Ex: un parcours.
    if (lineFeatures.length > 0) {
      const bounds = new maplibregl.LngLatBounds(
        lineFeatures[0].geometry.coordinates[0].slice(0, 2),
        lineFeatures[0].geometry.coordinates[0].slice(0, 2)
      );
      lineFeatures.forEach((feature) => {
        feature.geometry.coordinates.forEach((coord) => bounds.extend(coord.slice(0, 2)));
      });
      map.fitBounds(bounds, { padding: 20 });
    }
  }

  return { loadImages, addSlopeLayer, addGeojsonLayers, setInitialView }
}

  /**
   * Helpers
   */
  async function loadImage(map, image) {
    return new Promise((resolve, reject) => {
      map.loadImage(image, (error, data) => {
        if (error) return reject(error)
        resolve(data)
      })
    })
  }
