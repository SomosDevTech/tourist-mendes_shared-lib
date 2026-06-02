import { MapPoint } from './TourGenerator.types';

export type CircuitoTuristicoAvailabilityTypePublic = 'FIXED' | 'TEMPORARY' | 'SEASONAL';

export type CircuitoTuristicoPontoEntityTypePublic =
  | 'ATRACAO_LOCAL'
  | 'TRILHA'
  | 'EVENTO'
  | 'AGENTE_CULTURAL';

export interface CircuitoTuristicoCategoryPublic {
  id: string;
  name: string;
}

export interface CircuitoTuristicoCard {
  id: string;
  title: string;
  slug: string;
  shortDescription: string;
  availabilityType: CircuitoTuristicoAvailabilityTypePublic;
  season?: string | null;
  category: CircuitoTuristicoCategoryPublic;
  estimatedDurationMinutes?: number | null;
  coverImage: {
    url: string;
    altDescription: string;
  };
  stopCount: number;
}

export interface CircuitoTuristicoStopPublic {
  order: number;
  entityType: CircuitoTuristicoPontoEntityTypePublic;
  title: string;
  slug: string;
  publicPath: string;
  shortDescription?: string;
  stopNote?: string | null;
  wazeUrl?: string;
  coordinates?: {
    latitude: number;
    longitude: number;
  };
  coverImage?: {
    url: string;
    altDescription: string;
  };
}

export interface CircuitoTuristicoMapDataPublic {
  points: MapPoint[];
}

export interface CircuitoTuristicoPublic {
  id: string;
  title: string;
  slug: string;
  shortDescription: string;
  longDescription: string;
  availabilityType: CircuitoTuristicoAvailabilityTypePublic;
  season?: string | null;
  validFrom?: string | null;
  validTo?: string | null;
  estimatedDurationMinutes?: number | null;
  category: CircuitoTuristicoCategoryPublic;
  coverImage: {
    url: string;
    altDescription: string;
  };
  stops: CircuitoTuristicoStopPublic[];
  mapData: CircuitoTuristicoMapDataPublic;
  gpxUrl?: string;
  wazeUrlFirstStop?: string;
}

export interface CircuitoTuristicoListResponse {
  items: CircuitoTuristicoCard[];
  total: number;
  page: number;
  limit: number;
}
