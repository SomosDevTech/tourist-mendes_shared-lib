import { CreatedBy } from "./generalCmsTypes";


export interface AuditLogCmsType {
  id: string;
  registeredByName: string;
  action: string;
  nameOfAffectedEntity: string;
  description: string;
  registrationDateTime: Date;
  ipAddress: number;
}

export interface AuditLogCmsFiltersType {
  registeredByName: CreatedBy;
  action: AuditLogActionType;
  affectedEntity: {
    id: string,
    name: string,
  };
  startDate: Date;
  endDate: Date;
}

export type AuditLogActionType = 'CREATE' | 'UPDATE' | 'SOFT_DELETE' | 'HARD_DELETE' | 'LOGIN' | 'RESET_PASSWORD' | 'DEFINE_PASSWORD' | 'ENABLE' | 'DISABLE';

export type AuditLogEntityType = 'USUARIO' | 'ATRACAO_LOCAL' | 'AGENTE_CULTURAL' | 'TRILHA' | 'EVENTO' | 'BANNER' | 'ATRACAO_LOCAL_HIGHLIGHT' | 'AGENTE_CULTURAL_HIGHLIGHT' | 'TRILHA_HIGHLIGHT' | 'EVENTO_HIGHLIGHT';

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
