import { ImageData } from './typesHomePage';
import { BairroData } from "@/types/BairroData";
import { CategoryData } from "@/types/CategoryData";
import { AutorType, LastUpdateType } from "./typesCms";


export interface atracaoLocalHighlightCmsHomeType {
  id: string;
  status: boolean;
  title: string;
  category: CategoryData;
  neighborhood: BairroData;
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

export interface RegisterBannerHomeType {
  name: string;
  description?: string;
  redirectLink: string;
  image: File;
}