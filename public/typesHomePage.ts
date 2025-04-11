import { ImageData } from "./generalTypes";

export interface HomeBanner {
  imageData: ImageData;
  linkUrl: string;
  description?: string;
}

export interface AtracaoLocalHomeCard {
  title: string;
  shortDescription: string;
  linkUrl: string;
  imageData: ImageData;
}

export interface AgenteCulturalHomeCard {
  name: string;
  shortDescription: string;
  linkUrl: string;
  imageData: ImageData;
}

export interface TrilhasHomeCard {
  title: string;
  level: string;
  shortDescription: string;
  linkUrl: string;
  imageData: ImageData;
}

export interface EventHomeCard {
  eventTitle: string;
  shortDescription: string;
  linkUrl: string;
  imageData: ImageData;
}

export interface AboutSessionData {
  aboutDescription: string[];
  emails: string[];
  phoneNumbers: string[];
  address: string;
}

