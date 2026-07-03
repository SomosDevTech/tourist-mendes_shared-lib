/** GeoJSON Polygon — área de visita (Etapa 8.11). */
export interface VisitGeometryPolygon {
  type: 'Polygon';
  coordinates: number[][][];
}

const EARTH_RADIUS_METERS = 6371000;

function pointInRing(lng: number, lat: number, ring: number[][]): boolean {
  let inside = false;
  const closed =
    ring.length > 1 &&
    ring[0][0] === ring[ring.length - 1][0] &&
    ring[0][1] === ring[ring.length - 1][1]
      ? ring
      : [...ring, ring[0]];

  for (let i = 0, j = closed.length - 1; i < closed.length - 1; j = i++) {
    const xi = closed[i][0];
    const yi = closed[i][1];
    const xj = closed[j][0];
    const yj = closed[j][1];
    const intersect =
      yi > lat !== yj > lat && lng < ((xj - xi) * (lat - yi)) / (yj - yi + 0.0) + xi;
    if (intersect) inside = !inside;
  }
  return inside;
}

export function isPointInsideVisitGeometry(
  lat: number,
  lng: number,
  geometry: VisitGeometryPolygon,
): boolean {
  return pointInRing(lng, lat, geometry.coordinates[0]);
}

function haversineMeters(lat1: number, lng1: number, lat2: number, lng2: number): number {
  const toRad = (deg: number) => (deg * Math.PI) / 180;
  const dLat = toRad(lat2 - lat1);
  const dLng = toRad(lng2 - lng1);
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLng / 2) ** 2;
  return 2 * EARTH_RADIUS_METERS * Math.asin(Math.sqrt(a));
}

function distanceToSegmentMeters(
  lat: number,
  lng: number,
  lat1: number,
  lng1: number,
  lat2: number,
  lng2: number,
): number {
  const samples = 8;
  let min = Infinity;
  for (let i = 0; i <= samples; i++) {
    const t = i / samples;
    const sampleLat = lat1 + (lat2 - lat1) * t;
    const sampleLng = lng1 + (lng2 - lng1) * t;
    min = Math.min(min, haversineMeters(lat, lng, sampleLat, sampleLng));
  }
  return min;
}

/** Distância em metros até a borda do polígono (0 se dentro). */
export function distanceMetersToVisitGeometry(
  lat: number,
  lng: number,
  geometry: VisitGeometryPolygon,
): number {
  if (isPointInsideVisitGeometry(lat, lng, geometry)) {
    return 0;
  }

  const ring = geometry.coordinates[0];
  const closed =
    ring.length > 1 &&
    ring[0][0] === ring[ring.length - 1][0] &&
    ring[0][1] === ring[ring.length - 1][1]
      ? ring
      : [...ring, ring[0]];

  let min = Infinity;
  for (let i = 0; i < closed.length - 1; i++) {
    const [lng1, lat1] = closed[i];
    const [lng2, lat2] = closed[i + 1];
    min = Math.min(min, distanceToSegmentMeters(lat, lng, lat1, lng1, lat2, lng2));
  }
  return min;
}

export function parseVisitGeometry(value: unknown): VisitGeometryPolygon | null {
  if (!value || typeof value !== 'object') return null;
  const geo = value as VisitGeometryPolygon;
  if (geo.type !== 'Polygon' || !Array.isArray(geo.coordinates?.[0])) return null;
  return geo;
}
