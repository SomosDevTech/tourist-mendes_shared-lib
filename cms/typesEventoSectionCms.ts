import { EventDate } from "../public/FullEventoType";
import { BairroType, DataType, EventoCategoryType } from "../public/typesFiltrosPage";
import { CreatedBy, UpdatedBy } from "./generalCmsTypes";

export interface EventoCmsType {
  id: string;
  status: boolean;
  title: string;
  category: EventoCategoryType;
  neighborhood: BairroType;
  eventDate: EventDate;
  author: CreatedBy;
  registrationDate: Date;
  lastUpdate: UpdatedBy;
}

export interface EventoCmsFiltersType {
  category: EventoCategoryType[];
  neighborhood: BairroType[];
  author: CreatedBy[];
  date: DataType[];
}


export interface RegisteredEventoCmsType {
  id: string;
  status: boolean;
  title: string;
  categoryId: string;
  about: string;
  history: string;
  shortDescription: string;
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
  schedule: EventDate[];
  address: { // endereço obrigatório
    street: string;
    number: string;
    complement: string;
    zipCode: string;
    latitude: number;
    longitude: number;
  };
  neighborhoodId: string;
  coverImage: File;
  photos?: File[]; 
  videos?: File[]; 
}