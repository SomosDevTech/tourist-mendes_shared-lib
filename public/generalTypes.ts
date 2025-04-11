export interface VideoData {
  videoUrl: string;
}

export interface ImageData {
  imageUrl: string;
  altDescription: string;
}

export interface ResponseDTO<T> {
  message: string;
  status: number;
  dataType: string; // For debug porpuses
  data: T;
  totalRecords?: number;
}