/**
 * Categoria de preferência do usuário
 */
export interface CategoryPreference {
  id: string;    // UUID da categoria no banco de dados
  name: string;  // Nome para display (ex: "Música", "Cachoeira", "Ecoturismo")
}

/**
 * Request para geração de roteiro turístico
 * 
 * Nota: Data e hora são recebidos SEPARADOS
 * O backend monta o DateTime com timezone correto (America/Sao_Paulo)
 */
export interface GenerateTourRequest {
  preferences: CategoryPreference[];  // Categorias selecionadas (com id e nome)
  
  // Data e hora de INÍCIO da viagem (separados)
  startDate: string;  // Formato: YYYY-MM-DD (ex: "2025-11-03")
  startTime: string;  // Formato: HH:MM (ex: "13:00")
  
  // Data e hora de FIM da viagem (separados)
  endDate: string;    // Formato: YYYY-MM-DD (ex: "2025-11-06")
  endTime: string;    // Formato: HH:MM (ex: "14:00")
}

/**
 * Ponto no mapa do roteiro
 */
export interface MapPoint {
  id: string;                    // ID único do ponto (geralmente o slug)
  title: string;                 // Nome do ponto
  type: 'attraction' | 'event' | 'trail' | 'gastronomy' | 'accommodation'; // Tipo do ponto
  slug: string;                  // Slug do ponto
  coordinates: {                 // Coordenadas geográficas
    latitude: number;
    longitude: number;
  };
}

/**
 * Dados do mapa de um dia específico
 */
export interface DayMapData {
  dayNumber: number;             // Número do dia (1, 2, 3...)
  date: string;                  // Data no formato ISO (YYYY-MM-DD)
  points: MapPoint[];            // Pontos do mapa do dia
  gpxUrl?: string;               // URL para download do GPX do dia
}

/**
 * Dados completos do mapa do roteiro
 */
export interface TourMapData {
  days: DayMapData[];            // Dias do roteiro com seus pontos
}

/**
 * Response com o roteiro em texto formatado
 * 
 * O roteiro é retornado como TEXTO puro, formatado pelo modelo de IA
 * Frontend renderiza o texto diretamente
 */
export interface GenerateTourResponse {
  success: boolean;                  // Se a geração foi bem-sucedida
  roteiro: string;                   // ✨ Texto do roteiro (como retornado pelo modelo)
  generatedBy: 'ai' | 'fallback';    // Origem: IA (Gemini) ou gerador local (fallback)
  durationInDays: number;            // Total de dias da viagem
  preferences: CategoryPreference[]; // Preferências usadas na geração
  mapData?: TourMapData;             // Dados do mapa (opcional - pode não ter coordenadas)
  gpxUrl?: string;                   // URL para download do GPX completo (opcional)
}
