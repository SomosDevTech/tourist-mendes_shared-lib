import { ImageData, VideoData } from "./generalTypes";

export interface EventDate {
  date: string;
  startTime: string;
  finalTime: string;
};

export default interface FullEventoType {
  title: string;
  category: string;
  longDescription: string[];
  historicalInfo: string[];
  schedule: EventDate[];
  contacts: {
    phoneNumbers?: string[];
    email?: string[];
    site?: string;
    address: string;
  };
  socialMedia: {
    instagram?: string;
    facebooK?: string;
    tiktok?: string;
    whatsapp?: string;
    twitter?: string;
  };
  coverImage: ImageData;
  photoGallery: ImageData[];
  videos?: VideoData[];
  mapUrlLink: string;
}

export interface ResponseEventDate {
  to: string;
  from: string;
};

export interface RequestEventDate {
  date: string;
  startTime: string;
  finalTime: string;
};
