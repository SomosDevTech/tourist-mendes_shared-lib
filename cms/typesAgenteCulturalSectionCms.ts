import { ImageData } from "../public/generalTypes";
import { AgenteCulturalCategoryType, AreaDeAtuacaoType, AtracaoLocalCategoryType, BairroType, DataType } from "../public/typesFiltrosPage";
import { CreatedBy, UpdatedBy } from "./generalCmsTypes";

export interface AgenteCulturalCmsType {
  id: string;
  status: boolean;
  name: string;
  category: AgenteCulturalCategoryType;
  author: CreatedBy;
  registrationDate: Date;
  lastUpdate: UpdatedBy;
}

export interface AgenteCulturalCmsFiltersType {
  category: AtracaoLocalCategoryType[];
  areaOfexpert: AreaDeAtuacaoType[];
  author: CreatedBy[];
  date?: DataType[];
}

export interface AgenteCulturalCategoryCmsList {
  category: AgenteCulturalCategoryType[]
}


export interface BairroCmsList {
  neighborhoods: BairroType[];
}