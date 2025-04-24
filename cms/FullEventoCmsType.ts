export interface EventDateCmsType {
  date: Date; // salvar o dia do evento com horarios zerados
  startTime: Date; // hora de inicio do evento do dia especifico
  finalTime: Date; // hora do fim do evento do dia especifico
};

export default interface FullEventoCmsType {
  title: string;
  titleSort: string;
  about: string;
  history: string;
  mapUrlLink: string;
  status: boolean;
  qrCodeImage: string;
  shortDescription: string;
  linkUrl: string;
  category: string;
  contacts: {
    phone1?: string;
    phone2?: string;
    email1?: string;
    email2?: string;
    website?: string;
    instagram?: string;
    facebook?: string;
    tiktok?: string;
    whatsapp?: string;
    twitter?: string;
  };
  schedule: EventDateCmsType[];
  address: { // endereço obrigatório
    street: string;
    number: string;
    complement: string;
    zipCode: string;
    latitude: number;
    longitude: number;
  };
  neighborhood: {
    name: string;
    sortname: string;
  };
  coverImage: File;
  photos?: File[]; // fotos opcionais
  videos?: File[]; // Videos opcionais
  tour360UrlLink?: File;
  registeredById: string;
  updatedById?: string;
  deletedById?: string;
}