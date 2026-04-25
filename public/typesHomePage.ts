import { ImageData } from "./generalTypes";

export interface HomeBanner {
  imageData: ImageData;
  description?: string;
  linkUrl: string;
}

export interface AtracaoLocalHomeCard {
  id: string;
  title: string;
  shortDescription: string;
  imageData: ImageData;
}

export interface AgenteCulturalHomeCard {
  id: string;
  name: string;
  shortDescription: string;
  imageData: ImageData;
}



export interface TrilhasHomeCard {
  id: string;
  title: string;
  level: string;
  shortDescription: string;
  imageData: ImageData;
}

export interface EventHomeCard {
  id: string;
  eventTitle: string;
  shortDescription: string;
  imageData: ImageData;
}

export interface AboutSessionData {
  id?: string;
  aboutDescription: string[];
  emails: string[];
  phoneNumbers: string[];
  address: string;
  zipCode?: string;
}

export interface NossaHistoriaSessionData {
  id?: string;
  title: string | null;
  body: string[];
  status: boolean;
  imageData: ImageData;
}

export interface ComoChegarSessionData {
  id?: string;
  title: string | null;
  instructions: string[];
  address: string;
  zipCode?: string;
  mapsUrl: string;
  status: boolean;
}

