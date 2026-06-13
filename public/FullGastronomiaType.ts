import { PriceRange } from '../common/priceRangeEnums';
import { ImageData } from './generalTypes';

export default interface FullGastronomiaType {
  id: string;
  title: string;
  category: string;
  longDescription: string[];
  shortDescription: string;
  workingTime: string;
  priceRange: PriceRange;
  averageTicket?: number;
  hasDelivery: boolean;
  acceptsCard: boolean;
  hasParking: boolean;
  isAccessible: boolean;
  menuUrl?: string;
  contacts: {
    phoneNumbers?: string[];
    email?: string[];
    site?: string;
    address: string;
  };
  socialMedia: {
    instagram?: string;
    facebook?: string;
    tiktok?: string;
    whatsapp?: string;
    twitter?: string;
  };
  coverImage: ImageData;
  photoGallery: ImageData[];
  wazeUrl: string;
}
