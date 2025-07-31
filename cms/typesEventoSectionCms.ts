import { EventDate } from "../public/FullEventoType";
import { BairroType, DataType, EventoCategoryType } from "../public/typesFiltrosPage";
import { CreatedBy, RequestMediaCmsData, ResponseMediaCmsData, UpdatedBy } from "./generalCmsTypes";

export interface EventoCmsType {
  id: string;
  status: boolean;
  title: string;
  category: EventoCategoryType;
  neighborhood: BairroType;
  eventDate: {
    from: string;
    to: string;
  };
  author: CreatedBy;
  registrationDate: Date;
  lastUpdate?: UpdatedBy;
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


export interface RequestEditEventoCmsType {
  id: string;
  status?: boolean;
  title?: string;
  categoryId?: string;
  about?: string;
  history?: string;
  shortDescription?: string;
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
  schedule?: EventDate[];
  address?: {
    street: string;
    number: string;
    complement: string;
    zipCode: string;
    latitude: number;
    longitude: number;
  };
  neighborhoodId?: string;
  coverImage?: File;
  photos?: RequestMediaCmsData[] | File[];
  videos?: RequestMediaCmsData[] | File[];
}

export interface ResponseEditEventoCmsType {
  id: string;
  status: boolean;
  title: string;
  category: {
    id: string;
    name: string;
  };
  about: string;
  history: string;
  shortDescription: string;
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
  eventDate: {
    from: {
      date: string;
      startTime: string;
      endTime: string;
    };
    to: {
      date: string;
      startTime: string;
      endTime: string;
    };
  };
  address: {
    street: string;
    number: string;
    complement: string;
    zipCode: string;
    latitude: number;
    longitude: number;
  };
  neighborhood: {
    id: string;
    name: string;
  };
  coverImage: ResponseMediaCmsData;
  photos?: ResponseMediaCmsData[];
  videos?: ResponseMediaCmsData[];
  registeredById: string;
  updatedById: string;
  registrationDate: string;
  lastUpdate: {
    id: string;
    name: string;
    updatedAt: string;
  };
}
