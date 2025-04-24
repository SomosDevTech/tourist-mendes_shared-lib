import { TrilhaLevel } from "@/config/prisma/generatedFiles";

export default interface FullAtracaoLocalCmsType {
  status: boolean;
  title: string;
  titleSort: string;
  category: string;
  mapUrlLink: string;
  shortDescription: string;
  longDescription: string;
  historicalInfo: string;
  workingTime: string;
  moreInfosLink: string;
  qrCodeImage: string;
  linkUrl: string;
  extension: number;
  duration: number;
  level: TrilhaLevel    ;
  circuitMap: string;
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
    latitude: number;
    longitude: number;
  };
  neighborhood: {
    name: string;
    sortname: string;
  };
  coverImage: File;
  photoGallery?: File[]; // regra: min 2 fotos
  videos?: File[]; // Videos opcionais
  tour360UrlLink?: File;
  registeredById: string;
  updatedById?: string;
  deletedById?: string;
}