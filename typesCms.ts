import { BairroData } from "@/types/BairroData";
import { CategoryData } from "@/types/CategoryData";
import { AreaDeAtuacaoType, AtracaoLocalCategoryType, BairroType, DataType } from "./typesFiltrosPage";

export interface AutorType {
  id: string;
  username: string;
  email: string;
}

export interface LastUpdateType {
  id: string;
  name: string;
  updatedAt: Date;
}

export interface CadastroUsarioType {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface AtracaoLocalCmsType {
  id: string;
  status: boolean;
  title: string;
  category: CategoryData;
  neighborhood: BairroData;
  author: AutorType;
  createdAt: Date;
  lastUpdate: LastUpdateType
}

export interface AtracaoLocalCmsFiltersType {
  category: AtracaoLocalCategoryType[];
  neighborhood: BairroType[];
  author: AutorType[];
  date?: DataType[];
}

export interface AgenteCulturalCmsType {
  id: string;
  status: boolean;
  title: string;
  category: CategoryData;
  neighborhood: BairroData;
  areaOfexpert: AreaDeAtuacaoType;
  author: AutorType;
  createdAt: Date;
  lastUpdate: LastUpdateType
}

export interface AgenteCulturalCmsFiltersType {
  category: AtracaoLocalCategoryType[];
  areaOfexpert: AreaDeAtuacaoType[];
  author: AutorType[];
  date?: DataType[];
}


export interface UsuarioLoginType {
  email: string;
  password: string;
}

export interface payloadUsuarioTokenType {
  id: string;
  username: string;
  token: string;
}