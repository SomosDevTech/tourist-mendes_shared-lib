export const TURISTA_GENDER_VALUES = ['MALE', 'FEMALE', 'OTHER'] as const;

export type TuristaGender = (typeof TURISTA_GENDER_VALUES)[number];

export const TURISTA_GENDER_LABELS: Record<TuristaGender, string> = {
  MALE: 'Masculino',
  FEMALE: 'Feminino',
  OTHER: 'Outro',
};

const LEGACY_GENDER_MAP: Record<string, TuristaGender> = {
  M: 'MALE',
  F: 'FEMALE',
  O: 'OTHER',
  MALE: 'MALE',
  FEMALE: 'FEMALE',
  OTHER: 'OTHER',
};

export function normalizeTuristaGender(value: unknown): TuristaGender {
  if (typeof value === 'string' && value in LEGACY_GENDER_MAP) {
    return LEGACY_GENDER_MAP[value];
  }
  return 'MALE';
}

export function isFemaleGender(gender: TuristaGender): boolean {
  return gender === 'FEMALE';
}
