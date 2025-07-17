import { EventDate } from "../public/FullEventoType";
import { TrilhaInfo } from "../public/FullTrilhaType";
import { ImageData } from "../public/generalTypes";
import { AgenteCulturalCategoryType, AtracaoLocalCategoryType, BairroType, EventoCategoryType, TrilhaCategoryType } from '../public/typesFiltrosPage';
import { CreatedBy, UpdatedBy } from "./generalCmsTypes";

export interface BannerCmsHomeType {
  id: string
  name: string;
  description?: string
  redirectLink: string;
  imageData: ImageData;
}

export interface RegisterBannerCmsHomeType {
  name: string;
  description?: string;
  redirectLink: string;
  image: File;
  altDescription: string;
}

export interface ListBannerCmsHomeType {
  id: string;
  status: boolean;
  name: string;
  description: string;
  redirectLink: string;
  createdAt: Date;
  updateAt: Date;
  image: {
    linkUrl: string;
    altDescription: string;
  };
  registeredBy: CreatedBy;
  updatedBy: UpdatedBy | null;
}

export interface AtracaoLocalHighlightCmsHomeType {
  id: string;
  status: boolean;
  title: string;
  neighborhood: BairroType;
  category: AtracaoLocalCategoryType;
  coverImage: ImageData
}

export interface UpdateAtracaoLocalHighlightCmsHomeType {
  atracaoLocallId: string;
}

export interface AgenteCulturalHighlightCmsHomeType {
  id: string;
  status: boolean;
  name: string;
  category: AgenteCulturalCategoryType;
  profileImage: ImageData
}

export interface UpdateAgenteCulturalHighlightCmsHomeType {
  agenteCulturalId: string;
}


export interface TrilhaHighlightCmsHomeType {
  id: string;
  status: boolean;
  name: string;
  category: TrilhaCategoryType;
  neighborhood: BairroType;
  trailInfos: TrilhaInfo;
  coverImage: ImageData
}

export interface UpdateTrilhaHighlightCmsHomeType {
  trilhaId: string;
}

export interface EventoHighlightCmsHomeType {
  id: string;
  status: boolean;
  name: string;
  category: EventoCategoryType;
  neighborhood: BairroType;
  dates: EventDate[];
  coverImage: ImageData
}

export interface UpdateEventoHighlightCmsHomeType {
  eventoId: string;
}

export interface SobreCmsHomeType {
  id: string;
  description: string;
  contacts: {
    email1: string;
    email2: string;
    phone1: string;
    phone2: string;
    address: {
      street: string;
      number: string;
      complement: string;
      neighborhood: {
        id: string;
        name: string;
      };
      zipCode: string;
    }
  };
}

