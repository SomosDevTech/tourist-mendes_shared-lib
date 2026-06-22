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
