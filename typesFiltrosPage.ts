import { EventDate } from "./FullEventoType";
import { ImageData } from "./typesHomePage";

export interface FiltrosAtracaoLocalCard {
  title: string;
  neighborhood: string;
  linkUrl: string;
  imageData: ImageData;
}

export interface FiltrosAgenteCulturalCard {
  name: string;
  category: string;
  linkUrl: string;
  imageData: ImageData;
}

interface TrailInfos {
  extension: number;
  difficulty: "Fácil" | "Moderada" | "Difícil" | "Muito Difícil" | "Experts";
}

export interface FiltrosTrilhaCard {
  title: string;
  trailInfos: TrailInfos;
  linkUrl: string;
  imageData: ImageData;
}

export interface FiltrosEventoCard {
  title: string;
  neighborhood: string;
  linkUrl: string;
  schedule: EventDate[];
  imageData: ImageData;
}
