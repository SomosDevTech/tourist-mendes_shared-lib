import { EventDate } from "./FullEventoType";
import { ImageData } from "./typesHomePage";


/*Cards Types*/
export interface FiltrosAtracaoLocalCard {
  title: string;
  category: string;
  neighborhood: string;
  linkUrl: string;
  imageData: ImageData;
}

export interface FiltrosAgenteCulturalCard {
  name: string;
  category: string;
  linkUrl: string;
  imageData: ImageData;
}

interface TrailInfos {
  extension: number;
  difficulty: "Fácil" | "Moderada" | "Difícil" | "Muito Difícil" | "Experts";
}

export interface FiltrosTrilhaCard {
  title: string;
  trailInfos: TrailInfos;
  linkUrl: string;
  imageData: ImageData;
}

export interface FiltrosEventoCard {
  title: string;
  category: string;
  neighborhood: string;
  linkUrl: string;
  schedule: EventDate[];
  imageData: ImageData;
}

/*Filters Types*/
export interface AtracaoLocalCategoryType {
  id: string;
  name: string;
}

export interface FiltrosAtracaoLocalType {
  categories: AtracaoLocalCategoryType[];
  neighborhoods: BairroType[];
}

export interface AgenteCulturalCategoryType {
  id: string;
  name: string;
}

export interface AreaDeAtuacaoType {
  id: string;
  name: string;
}

export interface FiltrosagenteCulturalType {
  categories: AgenteCulturalCategoryType[];
  areasOfExpert: AreaDeAtuacaoType[];
}

export interface TrilhaCategoryType {
  id: string;
  name: string;
}

export interface FiltrosTrilhaType {
  categories: TrilhaCategoryType[];
  neighborhoods: BairroType[];
  difficulty: "Fácil" | "Moderada" | "Difícil" | "Muito Difícil" | "Experts";
}

export interface EventoCategoryType {
  id: string;
  name: string;
}

export interface FiltrosEventoType {
  categories: EventoCategoryType[];
  neighborhoods: BairroType[];
}


export interface BairroType {
  id: string;
  name: string;
}

export type DataType = {
  date: Date
}