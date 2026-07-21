export type TuristaGroupMemberRoleDto = "OWNER" | "ADMIN" | "MEMBER";
export type PresenceGeoModeDto = "TENANT_MAP" | "TENANT_MAP_BUFFER";
export type TuristaGroupCapabilityPolicyDto = "ALL" | "ADMINS_ONLY";
export type TuristaGroupInviteStatusDto = "PENDING" | "ACCEPTED" | "REJECTED" | "EXPIRED";

export type TuristaGroupMemberDto = {
  turistaId: string;
  displayName: string;
  avatarPresetId?: string;
  role: TuristaGroupMemberRoleDto;
  isBackupOwner: boolean;
  mapPresenceOn: boolean;
  joinedAt: string;
};

export type TuristaGroupSummaryDto = {
  id: string;
  name: string;
  description: string | null;
  role: TuristaGroupMemberRoleDto;
  isBackupOwner: boolean;
  mapPresenceOn: boolean;
  memberCount: number;
  presenceGeoMode: PresenceGeoModeDto;
  markersPolicy: TuristaGroupCapabilityPolicyDto;
  invitesPolicy: TuristaGroupCapabilityPolicyDto;
  pokeEnabled: boolean;
  createdAt: string;
};

export type TuristaGroupDetailDto = TuristaGroupSummaryDto & {
  ownerId: string;
  tenantId: string;
  presenceBufferKm: number | null;
  members: TuristaGroupMemberDto[];
};

export type TuristaGroupInvitePendingDto = {
  id: string;
  groupId: string;
  groupName: string;
  invitedByDisplayName: string;
  inviteeEmail: string;
  status: TuristaGroupInviteStatusDto;
  expiresAt: string;
  createdAt: string;
  needsRegistration: boolean;
};

export type TuristaGroupInviteCreatedDto = {
  id: string;
  groupId: string;
  inviteeEmail: string;
  inviteeExists: boolean;
  expiresAt: string;
};

export type PresencePositionDto = {
  turistaId: string;
  tenantId: string;
  groupId: string;
  lat: number;
  lng: number;
  heading?: number | null;
  updatedAt: string;
  displayName?: string;
  avatarPresetId?: string;
};

export type TuristaGroupMapMarkerDto = {
  id: string;
  groupId: string;
  lat: number;
  lng: number;
  label: string;
  iconKey: string | null;
  expiresAt: string | null;
  createdAt: string;
  createdByTuristaId: string;
  createdByDisplayName: string;
};

export type TuristaGroupMeetingPointDto = {
  id: string;
  groupId: string;
  lat: number;
  lng: number;
  label: string;
  scheduledAt: string | null;
  expiresAt: string | null;
  createdAt: string;
  createdByTuristaId: string;
  createdByDisplayName: string;
};

export type TuristaGroupIntentionStatusDto = "ACTIVE" | "ENDED";
export type TuristaGroupIntentionTargetTypeDto =
  | "FREE"
  | "POI"
  | "MARKER"
  | "MEETING"
  | "COORDS";

export type TuristaGroupIntentionDto = {
  id: string;
  groupId: string;
  turistaId: string;
  displayName: string;
  body: string;
  targetType: TuristaGroupIntentionTargetTypeDto;
  targetId: string | null;
  lat: number | null;
  lng: number | null;
  label: string | null;
  status: TuristaGroupIntentionStatusDto;
  endedAt: string | null;
  createdAt: string;
  updatedAt: string;
};

export type GroupAlertAttentionDto = {
  groupId: string;
  fromTuristaId: string;
  displayName: string;
  expiresAt: string;
};

export type GroupPokeDto = {
  groupId: string;
  fromTuristaId: string;
  displayName: string;
  targetTuristaId: string;
};

export type TuristaGroupActivityInviteTargetTypeDto = "POI" | "MARKER" | "COORDS";
export type TuristaGroupActivityInviteeStatusDto = "PENDING" | "ACCEPTED" | "REJECTED";

export type TuristaGroupActivityInviteeDto = {
  turistaId: string;
  displayName: string;
  status: TuristaGroupActivityInviteeStatusDto;
  respondedAt: string | null;
};

export type TuristaGroupActivityInviteDto = {
  id: string;
  groupId: string;
  createdById: string;
  createdByDisplayName: string;
  targetType: TuristaGroupActivityInviteTargetTypeDto;
  targetId: string | null;
  lat: number | null;
  lng: number | null;
  label: string;
  note: string | null;
  scheduledAt: string | null;
  markerId: string | null;
  createdAt: string;
  expiresAt: string | null;
  myStatus: TuristaGroupActivityInviteeStatusDto | null;
  invitees: TuristaGroupActivityInviteeDto[];
};

export type TuristaGroupAnnouncementDto = {
  id: string;
  groupId: string;
  createdById: string;
  createdByDisplayName: string;
  title: string | null;
  body: string;
  pinned: boolean;
  createdAt: string;
  read: boolean;
};

export const TURISTA_GROUP_ROLE_LABELS: Record<TuristaGroupMemberRoleDto, string> = {
  OWNER: "Dono",
  ADMIN: "Admin",
  MEMBER: "Membro",
};

export const PRESENCE_GEO_LABELS: Record<PresenceGeoModeDto, string> = {
  TENANT_MAP: "Somente no mapa",
  TENANT_MAP_BUFFER: "Mapa + arredores",
};
