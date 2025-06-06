import { DataType, TrilhaCategoryType } from "../public/typesFiltrosPage";
import { CreatedBy, RequestMediaCmsData, ResponseMediaCmsData, UpdatedBy } from "./generalCmsTypes";

type DifficultyLevel = "Fácil" | "Moderada" | "Difícil" | "Muito Difícil" | "Experts";

export interface TrilhaCmsType {
  id: string;
  status: boolean;
  title: string;
  category: TrilhaCategoryType;
  difficulty: DifficultyLevel;
  author: CreatedBy;
  registrationDate: Date;
  lastUpdate: UpdatedBy;
}

export interface TrilhaCmsFiltersType {
  category: TrilhaCategoryType[];
  author: CreatedBy[];
  date: DataType[];
}


export default interface RegisteredTrilhaCmsType {
  id: string;
  status: boolean;
  title: string;
  categoryId: string;
  shortDescription: string;
  longDescription: string;
  historicalInfo: string;
  workingTime: string;
  moreInfosLink: string;
  extension: number;
  duration: number;
  level: DifficultyLevel;
  circuitMap: File;
  contacts: {
    phone1?: string;
    phone2?: string;
    email1?: string;
    email2?: string;
  };
  address: { // endereço obrigatório  
    street: string; 
    number: string;
    complement: string;
    zipCode: string;
  };
  neighborhoodId: string;
  coverImage: File;
  photoGallery?: File[]; 
  videos?: File[]; 
  tour360UrlLink?: File;
}


export interface RequestEditTrilhaCmsType {
  id: string;
  status?: boolean;
  title?: string;
  categoryId?: string;
  shortDescription?: string;
  longDescription?: string;
  historicalInfo?: string;
  workingTime?: string;
  moreInfosLink?: string;
  extension?: number;
  duration?: number;
  level?: DifficultyLevel;
  circuitMap?: File;
  contacts?: {
    phone1?: string;
    phone2?: string;
    email1?: string;
    email2?: string;
  };
  address?: { 
    street: string; 
    number: string;
    complement: string;
    zipCode: string;
  };
  neighborhoodId?: string;
  coverImage?: File;
  photos?: RequestMediaCmsData[] | File[]; 
  videos?: RequestMediaCmsData[] | File[]; 
  tour360UrlLink?: File;
}


export interface ResponseEditTrilhaCmsType {
  id: string;
  status: boolean;
  title: string;
  categoryId: string;
  shortDescription: string;
  longDescription: string;
  historicalInfo: string;
  workingTime: string;
  moreInfosLink: string;
  qrCodeImage: string;
  extension: number;
  duration: number;
  level: DifficultyLevel;
  circuitMap: File;
  contacts: {
    phone1?: string;
    phone2?: string;
    email1?: string;
    email2?: string;
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
  coverImage: ResponseMediaCmsData;
  photos?: ResponseMediaCmsData[]; 
  videos?: ResponseMediaCmsData[]; 
}
