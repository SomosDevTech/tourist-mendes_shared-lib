import { ImageData, VideoData } from "./generalTypes";

export interface TrilhaInfo {
  extension: number;
  avgDuration: string;
  difficulty: "Fácil" | "Moderada" | "Difícil" | "Muito Difícil" | "Experts";
  linkUrlMoreInfo: string;
}

export default interface FullTrilhaType {
  title: string;
  category: string;
  longDescription: string[];
  trilhaInfo: TrilhaInfo;
  workingTime: string;
  contacts: {
    phoneNumbers?: string[];
    address?: string | undefined;
  };
  coverImage: ImageData;
  photoGallery?: ImageData[];
  videos?: VideoData[];
  tour360UrlLink?: string;
  linkUrlForGPX: string;
}

