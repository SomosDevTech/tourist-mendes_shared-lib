/** Texto padrão Etapa 8.10 — distância até o pin cadastrado no mapa. */
export function formatDistanceToMapPoint(meters: number): string {
  return `≈ ${Math.round(meters)} m do ponto no mapa`;
}
