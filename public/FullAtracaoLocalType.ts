import { ImageData, VideoData } from "./generalTypes";

export default interface FullAtracaoLocalType {
  id: string;
  title: string;
  category: string;
  longDescription: string[];
  historicalInfo: string[];
  workingTime: string;
  contacts: {
    phoneNumbers?: string[];
    email?: string[];
    site?: string;
    address: string;
  }
  socialMedia: {
    instagram?: string;
    facebook?: string;
    tiktok?: string;
    whatsapp?: string;
    twitter?: string;
  }
  coverImage: ImageData;
  photoGallery: ImageData[];
  videos?: VideoData[];
  tour360UrlLink?: string;
  mapUrlLink: string;
}