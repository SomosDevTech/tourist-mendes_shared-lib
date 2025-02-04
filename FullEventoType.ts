import { ImageData, VideoData } from "./typesHomePage";

interface Appointments {
  start: Date;
  final: Date;
};

export default interface FullEventoType {
  title: string;
  category: string;
  longDescription: string;
  historicalInfo: string;
  schedule: Appointments[];
  contacts: {
    phoneNumbers: string[];
    email: string[];
    site: string[];
    address: string[];
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
  videos: VideoData[];
  mapUrlLink: string;
}

