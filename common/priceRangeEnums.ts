/** Faixa de preço GH — sem dependência de ORM (shared front + back). */
export type PriceRange = 'BUDGET' | 'MODERATE' | 'EXPENSIVE' | 'LUXURY';

export const PRICE_RANGE_LABELS: Record<PriceRange, string> = {
  BUDGET: 'Econômico',
  MODERATE: 'Moderado',
  EXPENSIVE: 'Caro',
  LUXURY: 'Luxo',
};

export const PRICE_RANGE_OPTIONS: { id: PriceRange; name: string }[] = (
  Object.keys(PRICE_RANGE_LABELS) as PriceRange[]
).map((id) => ({ id, name: PRICE_RANGE_LABELS[id] }));
