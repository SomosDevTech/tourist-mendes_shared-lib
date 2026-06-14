export type TuristaPoiEntityType =
  | 'ATRACAO_LOCAL'
  | 'GASTRONOMIA'
  | 'HOSPEDAGEM'
  | 'EVENTO'
  | 'TRILHA'
  | 'MUSEU'
  | 'FAZENDA_HISTORICA'
  | 'AGENTE_CULTURAL';

export type TuristaFavoritoItemType = {
  id: string;
  entityType: TuristaPoiEntityType;
  entityId: string;
  title: string;
  slug: string;
  category?: string;
  coverImageUrl?: string;
  publicPath: string;
  createdAt: string;
};

export type TuristaFavoritoListType = {
  items: TuristaFavoritoItemType[];
  total: number;
  page: number;
  limit: number;
};

export type TuristaFavoritoIdsType = {
  items: Array<{
    entityType: TuristaPoiEntityType;
    entityId: string;
  }>;
};

export type TuristaFavoritoStatusType = {
  favorited: boolean;
};

export type TuristaFavoritoInput = {
  entityType: TuristaPoiEntityType;
  entityId: string;
};

export type EntityReviewType = {
  id: string;
  entityType: TuristaPoiEntityType;
  entityId: string;
  rating: number;
  comment: string | null;
  displayName: string;
  createdAt: string;
  updatedAt: string;
  isOwn: boolean;
};

export type EntityReviewSummaryType = {
  entityType: TuristaPoiEntityType;
  entityId: string;
  avgRating: number | null;
  reviewCount: number;
};

export type EntityReviewListType = {
  items: EntityReviewType[];
  total: number;
  page: number;
  limit: number;
  summary: EntityReviewSummaryType;
};

export type EntityReviewInput = {
  entityType: TuristaPoiEntityType;
  entityId: string;
  rating: number;
  comment?: string | null;
};

export type EntityReviewMineType = EntityReviewType | null;

export type TuristaReviewListItemType = {
  id: string;
  entityType: TuristaPoiEntityType;
  entityId: string;
  rating: number;
  comment: string | null;
  createdAt: string;
  updatedAt: string;
  title: string;
  slug: string;
  category?: string;
  coverImageUrl?: string;
  publicPath: string;
};

export type TuristaReviewListType = {
  items: TuristaReviewListItemType[];
  total: number;
  page: number;
  limit: number;
};

export const TURISTA_POI_ENTITY_LABELS: Record<TuristaPoiEntityType, string> = {
  ATRACAO_LOCAL: "Atração local",
  GASTRONOMIA: "Gastronomia",
  HOSPEDAGEM: "Hospedagem",
  EVENTO: "Evento",
  TRILHA: "Trilha",
  MUSEU: "Museu",
  FAZENDA_HISTORICA: "Fazenda histórica",
  AGENTE_CULTURAL: "Agente cultural",
};
