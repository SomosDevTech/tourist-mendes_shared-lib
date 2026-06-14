import { PriceRange } from '../common/priceRangeEnums';
import { BairroType, DataType } from '../public/typesFiltrosPage';
import { CreatedBy, RequestMediaCmsData, ResponseMediaCmsData, UpdatedBy } from './generalCmsTypes';

export interface HospedagemCategoryType {
  id: string;
  name: string;
}

export interface HospedagemCmsType {
  id: string;
  status: boolean;
  title: string;
  category: HospedagemCategoryType;
  neighborhood: BairroType;
  priceRange: PriceRange;
  author: CreatedBy;
  registrationDate: Date;
  lastUpdate?: UpdatedBy;
}

export interface HospedagemCmsFiltersType {
  category: HospedagemCategoryType[];
  neighborhood: BairroType[];
  author: CreatedBy[];
  date?: DataType[];
}

export interface RequestEditFullHospedagemCmsType {
  status?: boolean;
  title?: string;
  category?: HospedagemCategoryType;
  shortDescription?: string;
  longDescription?: string;
  priceRange?: PriceRange;
  averageRate?: number;
  totalRooms?: number;
  hasPet?: boolean;
  hasWifi?: boolean;
  hasBreakfast?: boolean;
  hasPool?: boolean;
  hasParking?: boolean;
  isAccessible?: boolean;
  checkInTime?: string;
  checkOutTime?: string;
  bookingUrl?: string;
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
  registeredById: string;
  updatedById?: string;
  deletedById?: string;
}

export interface FullHospedagemCmsType {
  id: string;
  status: boolean;
  title: string;
  category: HospedagemCategoryType;
  shortDescription: string;
  longDescription: string;
  priceRange: PriceRange;
  averageRate?: number;
  totalRooms?: number;
  hasPet: boolean;
  hasWifi: boolean;
  hasBreakfast: boolean;
  hasPool: boolean;
  hasParking: boolean;
  isAccessible: boolean;
  checkInTime?: string;
  checkOutTime?: string;
  bookingUrl?: string;
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
    street?: string;
    number?: string;
    complement?: string;
    zipCode?: string;
  };
  neighborhood: {
    id?: string;
    name?: string;
  };
  coverImage: ResponseMediaCmsData;
  photos: ResponseMediaCmsData[];
  registeredById: string;
  updatedById?: string;
  deletedById?: string;
  registrationDate: string;
  lastUpdate?: {
    id: string;
    username: string;
    updatedAt: string;
  };
}

export type ResponseEditFullHospedagemCmsType = FullHospedagemCmsType;
