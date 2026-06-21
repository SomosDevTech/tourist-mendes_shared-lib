import {
  CircuitoTuristicoAvailabilityType,
  CircuitoTuristicoPontoEntityType,
  CircuitoTuristicoSeason,
} from '../common/circuitoTuristicoEnums';
import {
  CircuitoTuristicoMapDataPublic,
  CircuitoTuristicoStopPublic,
} from '../public/typesCircuitoTuristico';

export type {
  CircuitoTuristicoAvailabilityType,
  CircuitoTuristicoPontoEntityType,
  CircuitoTuristicoSeason,
};

export interface CircuitoTuristicoPontoInput {
  order: number;
  entityType: CircuitoTuristicoPontoEntityType;
  entityId: string;
  stopNote?: string | null;
}

/** Parada com id opcional — usado ao substituir a lista mantendo ids existentes. */
export interface CircuitoTuristicoPontoUpsertInput extends CircuitoTuristicoPontoInput {
  id?: string;
}

export interface CircuitoTuristicoPontoUpdateInput {
  id: string;
  order?: number;
  entityType?: CircuitoTuristicoPontoEntityType;
  entityId?: string;
  stopNote?: string | null;
}

export interface PatchCircuitoTuristicoPontosInput {
  create?: CircuitoTuristicoPontoInput[];
  update?: CircuitoTuristicoPontoUpdateInput[];
  delete?: string[];
}

export interface CircuitoTuristicoCmsPontoSummary {
  id: string;
  order: number;
  entityType: CircuitoTuristicoPontoEntityType;
  entityId: string;
  stopNote?: string | null;
  entityTitle?: string;
  entitySlug?: string;
}

export interface CircuitoTuristicoCmsListItem {
  id: string;
  title: string;
  slug: string;
  status: boolean;
  availabilityType: CircuitoTuristicoAvailabilityType;
  season?: CircuitoTuristicoSeason | null;
  category: { id: string; name: string };
  stopCount: number;
  pontos: CircuitoTuristicoCmsPontoSummary[];
  displayOrder: number;
  registrationDate: string;
  updatedAt: string;
}

export interface CircuitoTuristicoCmsMapFields {
  mapData: CircuitoTuristicoMapDataPublic;
  gpxUrl?: string;
  wazeUrlFirstStop?: string;
  mapPointCount: number;
}

export interface CircuitoTuristicoCmsDetail extends CircuitoTuristicoCmsListItem, CircuitoTuristicoCmsMapFields {
  shortDescription: string;
  longDescription: string;
  seasonStartMonth?: number | null;
  seasonEndMonth?: number | null;
  validFrom?: string | null;
  validTo?: string | null;
  estimatedDurationMinutes?: number | null;
  coverImage: { id: string; url: string; altDescription: string };
}

export interface CircuitoTuristicoCmsMapaPreview {
  id: string;
  title: string;
  stops: CircuitoTuristicoStopPublic[];
  mapData: CircuitoTuristicoMapDataPublic;
  gpxUrl?: string;
  wazeUrlFirstStop?: string;
  mapPointCount: number;
}

export interface CircuitoTuristicoEntityPickerItem {
  id: string;
  entityType: CircuitoTuristicoPontoEntityType;
  title: string;
  slug: string;
  categoryLabel?: string;
}
