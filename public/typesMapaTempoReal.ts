/** Contrato público — `GET /api/app/mapa/config` (Etapa 8). */

export type MapaTempoRealContextType = 'CITY';

export type MapaTempoRealAvatarPresetId =
  | 'ADVENTURER'
  | 'ADVENTURER2'
  | 'FARMER'
  | 'FARMER2';

export interface MapaTempoRealLatLng {
  lat: number;
  lng: number;
}

export interface MapaTempoRealMunicipality {
  city: string;
  state: string;
}

export interface MapaTempoRealTileLayer {
  url: string;
  attribution: string;
  maxZoom: number;
}

export interface MapaTempoRealAvatarPreset {
  id: MapaTempoRealAvatarPresetId;
  label: string;
  spritesheetUrl: string;
  previewUrl: string;
  imageUrl?: string;
}

export interface MapaTempoRealLayerOption {
  id: string;
  label: string;
  enabled: boolean;
}

export interface MapaTempoRealConfigData {
  visible: boolean;
  mapContextType: MapaTempoRealContextType;
  municipality: MapaTempoRealMunicipality;
  defaultCenter: MapaTempoRealLatLng;
  defaultZoom: number;
  perimeterGeoJsonUrl: string;
  proximityAlertRadiusMeters: number;
  geofenceEnterRadiusMeters: number;
  minDwellSeconds: number;
  exitHysteresisSeconds: number;
  tileLayer: MapaTempoRealTileLayer;
  layersAvailable: MapaTempoRealLayerOption[];
  avatarPresets: MapaTempoRealAvatarPreset[];
}

/** POI leve — `GET /api/app/mapa/pois` (Etapa 8 Parte B). */
export type MapaTempoRealVisitAreaType = 'POINT' | 'LARGE_AREA' | 'PERIMETER';

export interface VisitGeometryPolygon {
  type: 'Polygon';
  coordinates: number[][][];
}

export interface MapaTempoRealPoiItem {
  entityType: string;
  entityId: string;
  layerId: string;
  title: string;
  slug: string;
  lat: number;
  lng: number;
  shortDescription?: string;
  coverImageUrl?: string;
  publicPath: string;
  averageRating?: number | null;
  reviewCount?: number;
  /** Etapa 8.10 — apenas atrações locais (demais POIs usam config global). */
  visitAreaType?: MapaTempoRealVisitAreaType;
  proximityRadiusMeters?: number | null;
  geofenceRadiusMeters?: number | null;
  visitGeometry?: VisitGeometryPolygon | null;
}

export interface MapaTempoRealCircuitoRoutePoint {
  order: number;
  lat: number;
  lng: number;
  title: string;
  entityType: string;
  entityId: string;
  publicPath: string;
}

export interface MapaTempoRealCircuitoMapItem {
  id: string;
  layerId: 'circuitoTuristico';
  title: string;
  slug: string;
  publicPath: string;
  shortDescription: string;
  coverImageUrl?: string;
  routePoints: MapaTempoRealCircuitoRoutePoint[];
  gpxUrl?: string;
}

export interface MapaTempoRealPoisData {
  pois: MapaTempoRealPoiItem[];
  circuitos: MapaTempoRealCircuitoMapItem[];
}

/** Detalhe expandido — `GET /api/app/mapa/pois/:entityType/:entityId`. */
export interface MapaTempoRealPoiDetailData extends MapaTempoRealPoiItem {
  category?: string;
  longDescription?: string;
  workingTime?: string;
  wazeUrl?: string;
}
