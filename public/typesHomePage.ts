import { ImageData } from "./generalTypes";

export interface HomeBanner {
  imageData: ImageData;
  description?: string;
  linkUrl: string;
}

export interface AtracaoLocalHomeCard {
  id: string;
  title: string;
  shortDescription: string;
  imageData: ImageData;
  avgRating?: number | null;
  reviewCount?: number;
}

export interface AgenteCulturalHomeCard {
  id: string;
  name: string;
  shortDescription: string;
  imageData: ImageData;
  avgRating?: number | null;
  reviewCount?: number;
}



export interface TrilhasHomeCard {
  id: string;
  title: string;
  level: string;
  shortDescription: string;
  imageData: ImageData;
  avgRating?: number | null;
  reviewCount?: number;
}

export interface EventHomeCard {
  id: string;
  eventTitle: string;
  shortDescription: string;
  imageData: ImageData;
  avgRating?: number | null;
  reviewCount?: number;
}

export interface AboutSessionData {
  id?: string;
  aboutDescription: string[];
  emails: string[];
  phoneNumbers: string[];
  address: string;
  zipCode?: string;
}

export interface NossaHistoriaSessionData {
  id?: string;
  title: string | null;
  body: string[];
  status: boolean;
  imageData: ImageData;
}

export interface ComoChegarSessionData {
  id?: string;
  title: string | null;
  instructions: string[];
  address: string;
  zipCode?: string;
  mapsUrl: string;
  status: boolean;
}

export interface HomeSectionVisibilityItem {
  /** Plano/assinatura (SaaS): colunas `subscriptionEnabled*` em `sections_visibility`. */
  enabledInCms: boolean;
  hasHighlights: boolean;
  highlightCount: number;
  /** Home: `enabledInCms` && escolha do tenant (`tenantVisible*`) && há conteúdo/listagem (`hasHighlights`). */
  visible: boolean;
}

export interface HomeSectionsVisibilityData {
  atracaoLocal: HomeSectionVisibilityItem;
  gastronomia: HomeSectionVisibilityItem;
  museu: HomeSectionVisibilityItem;
  fazendaHistorica: HomeSectionVisibilityItem;
  hospedagem: HomeSectionVisibilityItem;
  agenteCultural: HomeSectionVisibilityItem;
  trilha: HomeSectionVisibilityItem;
  evento: HomeSectionVisibilityItem;
  sobre: HomeSectionVisibilityItem;
  nossaHistoria: HomeSectionVisibilityItem;
  comoChegar: HomeSectionVisibilityItem;
  mapaInterativo: HomeSectionVisibilityItem;
  mapaTempoReal: HomeSectionVisibilityItem;
  roteiro: HomeSectionVisibilityItem;
  circuitoTuristico: HomeSectionVisibilityItem;
}

