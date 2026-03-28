import { ImageData } from './generalTypes';

export interface InstagramPublicCard {
  id: string;
  permalink: string;
  imageData: ImageData;
  caption?: string;
  isCollaborative: true;
}
