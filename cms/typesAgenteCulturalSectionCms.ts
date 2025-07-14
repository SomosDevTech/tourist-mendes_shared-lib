import {
  AgenteCulturalCategoryType,
  AreaDeAtuacaoType,
  AtracaoLocalCategoryType,
  DataType,
} from '../public/typesFiltrosPage';
import { CreatedBy, RequestMediaCmsData, ResponseMediaCmsData, UpdatedBy } from './generalCmsTypes';

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

export interface RegisteredAgenteCulturalCmsType {
  id: string;
  status: boolean;
  name: string;
  category: AgenteCulturalCategoryType;
  shortDescription: string;
  aboutMe: string;
  myContributions: string;
  areasOfExpert: string[]; // de 1 a 5
  contacts: {
    phone1: string; // obrigatorio ao menos 1 telefone
    phone2?: string;
    email1: string; // obrigatorio ao menos 1 email
    email2?: string;
    website?: string;
    instagram?: string;
    facebook?: string;
    tiktok?: string;
    whatsapp?: string;
    twitter?: string;
  };
  address?: {
    // Endereço opcional
    street: string;
    number: string;
    complement: string;
    zipCode: string;
  };
  neighborhood?: {
    name: string;
    sortname: string;
  };
  coverImage: File;
  profileImage: File;
  photoGallery: File[]; // regra: min 1 foto - max 6
  videos?: File[]; // Videos opcionais
}

export interface RequestEditAgenteCulturalCmsType {
  id: string;
  status?: boolean;
  name?: string;
  category?: AgenteCulturalCategoryType;
  shortDescription?: string;
  aboutMe?: string;
  myContributions?: string;
  areasOfExpert?: string[];
  contacts?: {
    phone1: string;
    phone2?: string;
    email1: string;
    email2?: string;
    website?: string;
    instagram?: string;
    facebook?: string;
    tiktok?: string;
    whatsapp?: string;
    twitter?: string;
  };
  address?: {
    street: string;
    number: string;
    complement: string;
    zipCode: string;
  };
  neighborhood?: {
    name: string;
    sortname: string;
  };
  coverImage?: File;
  profileImage?: File;
  photos?: RequestMediaCmsData[] | File[];
  videos?: RequestMediaCmsData[] | File[];
}

export interface ResponseEditAgenteCulturalCmsType {
  id: string;
  status: boolean;
  name: string;
  category: AgenteCulturalCategoryType;
  shortDescription: string;
  aboutMe: string;
  myContributions: string;
  areasOfExpert: string[];
  contacts: {
    phone1: string;
    phone2?: string;
    email1: string;
    email2?: string;
    website?: string;
    instagram?: string;
    facebook?: string;
    tiktok?: string;
    whatsapp?: string;
    twitter?: string;
  };
  address: {
    street: string;
    number: string;
    complement: string;
    zipCode: string;
  };
  neighborhood: {
    name: string;
    sortname: string;
  };
  coverImage: ResponseMediaCmsData;
  profileImage: ResponseMediaCmsData;
  photos?: ResponseMediaCmsData[];
  videos?: ResponseMediaCmsData[];
  tour360UrlLink?: string;
  tour360Id?: string;
}
