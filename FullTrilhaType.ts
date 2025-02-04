import { ImageData, VideoData } from "./typesHomePage";

interface TrilhaInfo {
  extension: number;
  avgDuration: string;
  difficulty: "facil" | "moderada" | "dificil" | "muito dificil" | "experts";
  linkUrlMoreInfo: string;
}

export default interface FullTrilhaType {
  title: string;
  category: string;
  longDescription: string;
  trilhaInfo: TrilhaInfo;
  workingTime: string;
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
  tour360UrlLink: string;
  linkUrlForGPX: string;
}

