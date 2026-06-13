import {
  CircuitoTuristicoAvailabilityType,
  CircuitoTuristicoPontoEntityType,
} from '../common/circuitoTuristicoEnums';
import { MapPoint } from './TourGenerator.types';

/** @deprecated Preferir `CircuitoTuristicoAvailabilityType` de `common/circuitoTuristicoEnums`. */
export type CircuitoTuristicoAvailabilityTypePublic = CircuitoTuristicoAvailabilityType;

/** @deprecated Preferir `CircuitoTuristicoPontoEntityType` de `common/circuitoTuristicoEnums`. */
export type CircuitoTuristicoPontoEntityTypePublic = CircuitoTuristicoPontoEntityType;

export interface CircuitoTuristicoCategoryPublic {
  id: string;
  name: string;
}

export interface CircuitoTuristicoCard {
  id: string;
  title: string;
  slug: string;
  shortDescription: string;
  availabilityType: CircuitoTuristicoAvailabilityType;
  season?: string | null;
  /** Indica se o circuito está dentro da janela de disponibilidade (época/datas). */
  isCurrentlyAvailable: boolean;
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
  entityType: CircuitoTuristicoPontoEntityType;
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
  availabilityType: CircuitoTuristicoAvailabilityType;
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
