import type { MapaTempoRealAvatarPresetId } from './typesMapaTempoReal';

/** Configuração modular Pixel Lands — evolui com layers na Fase B+. */
export interface TuristaAvatarConfig {
  engine: 'PIXEL_LANDS_V1';
  genderDefault: 'MALE' | 'FEMALE';
  /** Preset premade enquanto o composer de layers não estiver pronto. */
  presetId?: MapaTempoRealAvatarPresetId;
  baseId?: string;
  feetId?: string;
  bottomId?: string;
  topId?: string;
  hairId?: string;
  hatId?: string;
}

export type TuristaUpdateAvatarInput = {
  avatarPresetId?: MapaTempoRealAvatarPresetId;
  avatarConfig?: TuristaAvatarConfig;
};

export type { TuristaGender } from './turistaGender';
