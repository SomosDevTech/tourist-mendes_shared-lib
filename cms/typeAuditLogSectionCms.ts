import { CreatedBy } from "./generalCmsTypes";

export type AuditActorType = 'USUARIO' | 'TURISTA' | 'SYSTEM';

export interface AuditLogCmsType {
  id: string;
  registeredByName: string;
  actorType: AuditActorType;
  action: string;
  nameOfAffectedEntity: string;
  description: string;
  registrationDateTime: Date;
  ipAddress: string;
}

export interface AuditLogCmsFiltersType {
  registeredByName: CreatedBy;
  action: AuditLogActionType;
  affectedEntity: {
    id: string,
    name: string,
  };
  entities?: string[];
  includeTuristaAudit?: boolean;
  startDate: Date;
  endDate: Date;
}

export type AuditLogActionType =
  | 'CREATE'
  | 'UPDATE'
  | 'SOFT_DELETE'
  | 'HARD_DELETE'
  | 'LOGIN'
  | 'LOGOUT'
  | 'RESET_PASSWORD'
  | 'DEFINE_PASSWORD'
  | 'ENABLE'
  | 'DISABLE'
  | 'DELETION_REQUESTED'
  | 'DELETION_CONFIRMED'
  | 'REACTIVATED'
  | 'ANONYMIZED';

export type AuditLogEntityType =
  | 'USUARIO'
  | 'TURISTA'
  | 'ATRACAO_LOCAL'
  | 'AGENTE_CULTURAL'
  | 'TRILHA'
  | 'EVENTO'
  | 'BANNER'
  | 'ATRACAO_LOCAL_HIGHLIGHT'
  | 'AGENTE_CULTURAL_HIGHLIGHT'
  | 'TRILHA_HIGHLIGHT'
  | 'EVENTO_HIGHLIGHT'
  | 'SECTIONS_VISIBILITY';

export type AuditLogData = {
  entity: AuditLogEntityType,
  entityId: string,
  action: AuditLogActionType,
  userId: string,
  description: string,
  oldValues?: string,
  newValues?: string,
  ipAddress?: string,
}
