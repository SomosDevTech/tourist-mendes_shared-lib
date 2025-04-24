import { AgenteCulturalCategoryType, AreaDeAtuacaoType, AtracaoLocalCategoryType, BairroType, DataType } from "../public/typesFiltrosPage";
import { AutorType, LastUpdateType } from "./generalCmsTypes";

export interface AgenteCulturalCmsType {
  id: string;
  status: boolean;
  name: string;
  category: AgenteCulturalCategoryType;
  author: AutorType;
  createdAt: Date;
  lastUpdate?: LastUpdateType;
}

export interface AgenteCulturalCmsFiltersType {
  category: AtracaoLocalCategoryType[];
  areaOfexpert: AreaDeAtuacaoType[];
  author: AutorType[];
  date?: DataType[];
}

export interface AgenteCulturalCategoryCmsList {
  category: AgenteCulturalCategoryType[]
}


export interface BairroCmsList {
  neighborhoods: BairroType[];
}