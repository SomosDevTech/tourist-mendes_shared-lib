import { PriceRange } from '@prisma/client';
import { ImageData } from './generalTypes';

export default interface FullHospedagemType {
  id: string;
  title: string;
  category: string;
  longDescription: string[];
  shortDescription: string;
  priceRange: PriceRange;
  averageRate?: number;
  totalRooms?: number;
  hasPet: boolean;
  hasWifi: boolean;
  hasBreakfast: boolean;
  hasPool: boolean;
  hasParking: boolean;
  isAccessible: boolean;
  checkInTime?: string;
  checkOutTime?: string;
  bookingUrl?: string;
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
