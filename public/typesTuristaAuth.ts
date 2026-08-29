export type TuristaProfileType = {
  id: string;
  email: string;
  displayName: string;
  country: string;
  countryName: string;
  city: string;
  state: string | null;
  ibgeCityId: number | null;
  age: number;
  birthDate: string;
  avatarUrl: string | null;
  gender: import('./turistaGender').TuristaGender;
  avatarPresetId: import('./typesMapaTempoReal').MapaTempoRealAvatarPresetId;
  avatarConfig: import('./typesTuristaAvatar').TuristaAvatarConfig | null;
  emailVerified: boolean;
  createdAt: string;
};

export type TuristaRegisterPendingType = {
  email: string;
  emailVerificationSent: true;
};

/** Sessão turista. `turistaAccessToken` omitido no JSON (SEC#20 — cookie HttpOnly). */
export type TuristaAuthResponseType = {
  turista: TuristaProfileType;
  /** @deprecated Preferir cookie HttpOnly; mantido opcional só para clientes legados. */
  turistaAccessToken?: string;
};

export type TuristaRegisterInput = {
  email: string;
  password: string;
  confirmPassword: string;
  displayName: string;
  birthDate: string;
  gender: import('./turistaGender').TuristaGender;
  country: string;
  city: string;
  state?: string | null;
  ibgeCityId?: number;
  acceptPrivacyPolicy: true;
  acceptAnalyticsConsent: true;
};

export type TuristaLoginInput = {
  email: string;
  password: string;
};

export type TuristaUpdateProfileInput = {
  displayName?: string;
  avatarUrl?: string | null;
  gender?: import('./turistaGender').TuristaGender;
  country?: string;
  city?: string;
  state?: string | null;
  ibgeCityId?: number | null;
};

export type PaisListItemType = {
  code: string;
  namePt: string;
  nameEn: string;
};

export type CidadeListItemType = {
  id: number;
  nome: string;
  estado: string;
  uf: string;
};
export type TuristaCmsListItemType = {
  id: string;
  email: string;
  displayName: string;
  country: string;
  countryName: string;
  city: string;
  state: string | null;
  ibgeCityId: number | null;
  age: number;
  gender: import('./turistaGender').TuristaGender;
  avatarPresetId: import('./typesMapaTempoReal').MapaTempoRealAvatarPresetId;
  avatarUrl: string | null;
  emailVerified: boolean;
  tenantId: string;
  status: boolean;
  registrationIp: string | null;
  oauthProvider: string | null;
  createdAt: string;
  updatedAt: string;
};

export type TuristaCmsListResponseType = {
  items: TuristaCmsListItemType[];
  total: number;
  page: number;
  limit: number;
};

