import { ImageData } from './generalTypes';

export interface InstagramPublicCard {
  id: string;
  permalink: string;
  /** Handle do autor no formato @username (quando o payload traz username). */
  authorInstagramHandle?: string;
  imageData: ImageData;
  caption?: string;
  isCollaborative: true;
}
