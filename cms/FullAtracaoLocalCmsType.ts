import { AtracaoLocalCategoryType } from "../public/typesFiltrosPage";

export default interface FullAtracaoLocalCmsType {
  status: boolean;
  title: string;
  category: AtracaoLocalCategoryType;
  mapUrlLink: string;
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
  coverImage?: ImageCmsData;
  photos: ImageCmsData[]; // regra: min 2 fotos
  videos?: VideoCmsData[]; // Videos opcionais
  tour360UrlLink?: File;
  registeredById: string;
  updatedById?: string;
  deletedById?: string;
}

export interface ImageCmsData {
  data: File;
  altDescription: string;
}

export interface EditImageCmsData {
  id: string;
  data: File;
  altDescription: string;
}

export interface VideoCmsData {
  data: File;
  altDescription: string;
}

export interface EditVideoCmsData {
  id: string;
  data: File;
  altDescription: string;
}


