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
};

export type CentroTuristicoData = {
  id: string;
  name: string;
  category: 'TURISTICO' | 'HISTORICO' | 'CULTURAL' | 'ARQUEOLOGICO';
  latitude: number;
  longitude: number;
  /** Anel externo [lng, lat]. Estar dentro é ter entrado no centro. */
  ring: number[][];
  proximityRadiusMeters: number;
  acessos: CentroTuristicoAcessoData[];
  atracoes: CentroTuristicoAtracaoData[];
};
