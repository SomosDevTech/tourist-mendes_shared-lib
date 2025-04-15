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
  aboutDescription: string[];
  emails: string[];
  phoneNumbers: string[];
  address: string;
}

