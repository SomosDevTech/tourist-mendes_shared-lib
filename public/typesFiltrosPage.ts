import { EventDate } from "./FullEventoType";
import { ImageData } from "./generalTypes";


/*Cards Types*/
export interface FiltrosAtracaoLocalCard {
  id: string;
  title: string;
  category: string;
  neighborhood: string;
  imageData: ImageData;
}

export interface FiltrosAgenteCulturalCard {
  id: string;
  name: string;
  category: string;
  imageData: ImageData;
}

interface TrailInfos {
  extension: number;
  difficulty: "Fácil" | "Moderada" | "Difícil" | "Muito Difícil" | "Experts";
}

export interface FiltrosTrilhaCard {
  id: string;
  title: string;
  trailInfos: TrailInfos;
  imageData: ImageData;
}

export interface FiltrosEventoCard {
  id: string;
  title: string;
  category: string;
  neighborhood: string;
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