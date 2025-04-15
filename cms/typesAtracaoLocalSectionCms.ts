import { AtracaoLocalCategoryType, BairroType, DataType } from "../public/typesFiltrosPage";
import { AutorType, LastUpdateType } from "./generalCmsTypes";

export interface AtracaoLocalCmsType {
  id: string;
  status: boolean;
  title: string;
  category: AtracaoLocalCategoryType;
  neighborhood: BairroType;
  author: AutorType;
  createdAt: Date;
  lastUpdate: LastUpdateType;
}

export interface AtracaoLocalCmsFiltersType {
  category: AtracaoLocalCategoryType[];
  neighborhood: BairroType[];
  author: AutorType[];
  date?: DataType[];
}


