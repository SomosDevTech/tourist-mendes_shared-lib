import { TuristaPoiEntityType } from './typesTuristaEngagement';

export type TuristaVisitConfirmation = 'PENDING' | 'CONFIRMED' | 'DENIED';

export interface TuristaVisitData {
  id: string;
  entityType: TuristaPoiEntityType;
  entityId: string;
  enteredAt: string;
  exitedAt?: string | null;
  dwellMinutes?: number | null;
  visitNumber: number;
  circuitId?: string | null;
  circuitStopIndex?: number | null;
  reviewId?: string | null;
  detailViewedAt?: string | null;
  confirmedByUser: TuristaVisitConfirmation;
  poiTitle?: string;
  poiPublicPath?: string;
}

export interface TuristaVisitEnterInput {
  entityType: TuristaPoiEntityType;
  entityId: string;
  circuitId?: string | null;
  circuitStopIndex?: number | null;
  detailViewedAt?: string | null;
}

export interface TuristaVisitExitInput {
  /** @deprecated não utilizado — saída não altera confirmação */
  confirmedByUser?: TuristaVisitConfirmation;
}

export interface TuristaVisitLinkReviewInput {
  reviewId: string;
}

export interface TuristaVisitActiveData {
  visit: TuristaVisitData | null;
}

export interface TuristaCircuitProgressData {
  circuitId: string;
  circuitTitle: string;
  totalStops: number;
  visitedStopIndexes: number[];
  completedAt?: string | null;
}

export interface TuristaMapaJourneyData {
  activeVisit: TuristaVisitData | null;
  recentVisits: TuristaVisitData[];
  circuitProgress: TuristaCircuitProgressData[];
}
