import { PriceRange } from '../common/priceRangeEnums';
import { BairroType, DataType } from '../public/typesFiltrosPage';
import { CreatedBy, RequestMediaCmsData, ResponseMediaCmsData, UpdatedBy } from './generalCmsTypes';

export interface GastronomiaCategoryType {
  id: string;
  name: string;
}

export interface GastronomiaCmsType {
  id: string;
  status: boolean;
  title: string;
  category: GastronomiaCategoryType;
  neighborhood: BairroType;
  priceRange: PriceRange;
  author: CreatedBy;
  registrationDate: Date;
  lastUpdate?: UpdatedBy;
}

export interface GastronomiaCmsFiltersType {
  category: GastronomiaCategoryType[];
  neighborhood: BairroType[];
  author: CreatedBy[];
  date?: DataType[];
}

export interface RequestEditFullGastronomiaCmsType {
  status?: boolean;
  title?: string;
  category?: GastronomiaCategoryType;
  shortDescription?: string;
  longDescription?: string;
  workingTime?: string;
  priceRange?: PriceRange;
  averageTicket?: number;
  hasDelivery?: boolean;
  acceptsCard?: boolean;
  hasParking?: boolean;
  isAccessible?: boolean;
  menuUrl?: string;
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

export interface FullGastronomiaCmsType {
  id: string;
  status: boolean;
  title: string;
  category: GastronomiaCategoryType;
  shortDescription: string;
  longDescription: string;
  workingTime: string;
  priceRange: PriceRange;
  averageTicket?: number;
  hasDelivery: boolean;
  acceptsCard: boolean;
  hasParking: boolean;
  isAccessible: boolean;
  menuUrl?: string;
  linkUrl?: string;
  qrCodeImage?: string;
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

export type ResponseEditFullGastronomiaCmsType = FullGastronomiaCmsType;
