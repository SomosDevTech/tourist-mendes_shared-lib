import { TuristaPoiEntityType } from './typesTuristaEngagement';

export type TuristaMapEventType = 'PROXIMITY' | 'NOTIFIED' | 'NOTIFY_OPENED' | 'ARRIVAL_DENIED';

export interface TuristaMapEventData {
  id: string;
  eventType: TuristaMapEventType;
  entityType: TuristaPoiEntityType;
  entityId: string;
  occurredAt: string;
  duplicate: boolean;
}
