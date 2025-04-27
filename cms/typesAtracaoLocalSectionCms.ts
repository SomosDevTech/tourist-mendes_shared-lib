import { AtracaoLocalCategoryType, BairroType, DataType } from "../public/typesFiltrosPage";
import { CreatedBy, UpdatedBy } from "./generalCmsTypes";

export interface AtracaoLocalCmsType {
  id: string;
  status: boolean;
  title: string;
  category: AtracaoLocalCategoryType;
  neighborhood: BairroType;
  author: CreatedBy;
  registrationDate: Date;
  lastUpdate: UpdatedBy;
}

export interface AtracaoLocalCmsFiltersType {
  category: AtracaoLocalCategoryType[];
  neighborhood: BairroType[];
  author: CreatedBy[];
  date?: DataType[];
}


