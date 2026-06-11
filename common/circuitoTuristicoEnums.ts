/** Enums de domínio — sem dependência de ORM/framework (shared front + back). */

export type CircuitoTuristicoAvailabilityType = 'FIXED' | 'TEMPORARY' | 'SEASONAL';

export type CircuitoTuristicoSeason =
  | 'VERAO'
  | 'OUTONO'
  | 'INVERNO'
  | 'PRIMAVERA'
  | 'CARNAVAL'
  | 'FESTAS_JUNINAS'
  | 'FIM_DE_ANO'
  | 'CUSTOM';

export type CircuitoTuristicoPontoEntityType =
  | 'ATRACAO_LOCAL'
  | 'TRILHA'
  | 'EVENTO'
  | 'AGENTE_CULTURAL';

export type PriceRange {
  BUDGET
  MODERATE
  EXPENSIVE
  LUXURY
}
