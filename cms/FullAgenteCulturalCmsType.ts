import { AgenteCulturalCategoryType } from "../public/typesFiltrosPage";


export default interface FullAgenteCulturalCmsType {
  status: boolean;
  name: string;
  category: AgenteCulturalCategoryType;
  mapUrlLink?: string;
  shortDescription: string;
  aboutMe: string;
  myContributions: string;
  areasOfExpert: string[];
  qrCodeImage: string;
  linkUrl: string;
  contacts: {
    phone1: string;  // obrigatorio ao menos 1 telefone
    phone2?: string;
    email1: string;  // obrigatorio ao menos 1 email
    email2?: string;
    website?: string;
    instagram?: string;
    facebook?: string;
    tiktok?: string;
    whatsapp?: string;
    twitter?: string;
  };
  address?: { // Endereço opcional
    street: string;
    number: string;
    complement: string;
    zipCode: string;
    latitude: number;
    longitude: number;
  };
  neighborhood?: {
    name: string;
    sortname: string;
  };
  coverImage: File;
  profileImage: File;
  photoGallery: File[]; // regra: min 1 foto - max 6
  videos?: File[]; // Videos opcionais
  tour360UrlLink?: File;
  registeredById: string;
  updatedById?: string;
  deletedById?: string;
}
