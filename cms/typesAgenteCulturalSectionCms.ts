import { BairroData } from "@/types/BairroData";
import { CategoryData } from "@/types/CategoryData";
import { AreaDeAtuacaoType, AtracaoLocalCategoryType, DataType } from "../public/typesFiltrosPage";
import { AutorType, LastUpdateType } from "./generalCmsTypes";

export interface AgenteCulturalCmsType {
  id: string;
  status: boolean;
  title: string;
  category: CategoryData;
  neighborhood: BairroData;
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


