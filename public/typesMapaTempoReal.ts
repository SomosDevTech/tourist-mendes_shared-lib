/** Contrato público — `GET /api/app/mapa/config` (Etapa 8 Parte A). */

export type MapaTempoRealContextType = 'CITY';

export type MapaTempoRealAvatarPresetId = 'BOY' | 'GIRL';

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
  imageUrl: string;
}

/** Camadas de POI — Parte B consome `enabled`; Parte A já expõe para o front montar UI. */
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
  tileLayer: MapaTempoRealTileLayer;
  layersAvailable: MapaTempoRealLayerOption[];
  avatarPresets: MapaTempoRealAvatarPreset[];
}

/** POI leve — `GET /api/app/mapa/pois` (Etapa 8 Parte B). */
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
}

export interface MapaTempoRealCircuitoRoutePoint {
  order: number;
  lat: number;
  lng: number;
  title: string;
  entityType: string;
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
  wazeUrl?: string;
}
