export type TuristaExplorationStatusData = {
  enabled: boolean;
  areaAvailable: boolean;
};

export type TuristaExplorationSampleResult = {
  stored: number;
  dropped: number;
  areaAvailable: boolean;
};

export type CentroTuristicoAcessoData = {
  id: string;
  name: string;
  latitude: number;
  longitude: number;
};

export type CentroTuristicoAtracaoData = {
  entityType: string;
  entityId: string;
  title: string;
};

export type CentroTuristicoCategoryData = {
  id: string;
  name: string;
};

export type CentroTuristicoPinData = {
  id: string;
  title: string;
  latitude: number;
  longitude: number;
};

export type CentroTuristicoData = {
  id: string;
  name: string;
  categoryId: string;
  /** Nome do tipo, para a lista e para o aplicativo. */
  category: string;
  latitude: number;
  longitude: number;
  /** Anel externo [lng, lat]. Estar dentro é ter entrado no centro. */
  ring: number[][];
  proximityRadiusMeters: number;
  createdAt: string;
  registeredByName: string | null;
  acessos: CentroTuristicoAcessoData[];
  atracoes: CentroTuristicoAtracaoData[];
};
