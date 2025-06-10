import {
  AtracaoLocalCategoryType,
  BairroType,
  DataType,
} from "../public/typesFiltrosPage";
import { CreatedBy, RequestMediaCmsData, ResponseMediaCmsData, UpdatedBy } from "./generalCmsTypes";

export interface AtracaoLocalCmsType {
  id: string;
  status: boolean;
  title: string;
  category: AtracaoLocalCategoryType;
  neighborhood: BairroType;
  author: CreatedBy;
  registrationDate: Date;
  lastUpdate?: UpdatedBy;
}

export interface AtracaoLocalCmsFiltersType {
  category: AtracaoLocalCategoryType[];
  neighborhood: BairroType[];
  author: CreatedBy[];
  date?: DataType[];
}

export interface RegisteredAtracaoLocalCmsType {
  id: string;
  status: boolean;
  title: string;
  category: AtracaoLocalCategoryType;
  shortDescription: string;
  longDescription: string;
  historicalInfo: string;
  workingTime: string;
  contacts: {
    phone1?: string;
    phone2?: string;
    email1?: string;
    email2?: string;
    website?: string;
    instagram?: string;
    facebook?: string;
    tiktok?: string;
    whatsapp?: string;
    twitter?: string;
  };
  address: {
    // endereço obrigatório
    street: string;
    number: string;
    complement: string;
    zipCode: string;
  };
  neighborhood: {
    id: string;
    name: string;
  };
  coverImage?: File;
  photos: File[]; // regra: min 2 fotos
  videos?: File[]; // Videos opcionais
  tour360UrlLink?: File;
}


export interface RequestEditFullAtracaoLocalCmsType {
  status?: boolean;
  title?: string;
  category?: AtracaoLocalCategoryType;
  mapUrlLink?: string;
  shortDescription?: string;
  longDescription?: string;
  historicalInfo?: string;
  workingTime?: string;
  contacts?: {
    phone1?: string;
    phone2?: string;
    email1?: string;
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
    id: string;
    name: string;
  };
  coverImage?: File;
  photos?: RequestMediaCmsData[] | File[];
  videos?: RequestMediaCmsData[] | File[];
  tour360UrlLink?: File;
  registeredById: string;
  updatedById?: string;
  deletedById?: string;
}

export interface ResponseEditFullAtracaoLocalCmsType {
  id: string;
  status: boolean;
  title: string;
  category: AtracaoLocalCategoryType;
  mapUrlLink: string;
  shortDescription: string;
  longDescription: string;
  historicalInfo: string;
  workingTime: string;
  qrCodeImage: string;
  contacts: {
    phone1?: string;
    phone2?: string;
    email1?: string;
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
    id: string;
    name: string;
  };
  coverImage: ResponseMediaCmsData;
  photos: ResponseMediaCmsData[]; 
  videos?: ResponseMediaCmsData[]; 
  tour360UrlLink?: File;
  registeredById: string;
  updatedById?: string;
  deletedById?: string;
}

