import { AutorType, LastUpdateType } from './generalCmsTypes';
import { ImageData } from "../public/generalTypes";
import { AtracaoLocalCategoryType, BairroType } from '../public/typesFiltrosPage';


export interface AtracaoLocalHighlightCmsHomeType {
  id: string;
  status: boolean;
  title: string;
  category: AtracaoLocalCategoryType;
  neighborhood: BairroType;
  author: AutorType;
  createdAt: Date;
  lastUpdate: LastUpdateType;
}

export interface AtracaoLocalCsmHomeType {
  id: string;
  title: string;
}


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
}