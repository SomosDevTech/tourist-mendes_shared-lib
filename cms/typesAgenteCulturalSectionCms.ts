import { AgenteCulturalCategoryType, AreaDeAtuacaoType, AtracaoLocalCategoryType, BairroType, DataType } from "../public/typesFiltrosPage";
import { AutorType, LastUpdateType } from "./generalCmsTypes";

export interface AgenteCulturalCmsType {
  id: string;
  status: boolean;
  title: string;
  category: AgenteCulturalCategoryType;
  neighborhood: BairroType;
  areaOfexpert: AreaDeAtuacaoType;
  author: AutorType;
  createdAt: Date;
  lastUpdate: LastUpdateType;
}

export interface AgenteCulturalCmsFiltersType {
  category: AtracaoLocalCategoryType[];
  areaOfexpert: AreaDeAtuacaoType[];
  author: AutorType[];
  date?: DataType[];
}


