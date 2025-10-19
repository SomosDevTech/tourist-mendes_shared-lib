/**
 * Tipos para comunicação entre Frontend e Backend
 * Geração de Roteiros Turísticos - TurisMendes
 * 
 * Estes tipos são compartilhados entre frontend e backend
 * para garantir consistência na API de geração de roteiros
 */

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
  preferences: CategoryPreference[];  // 3-5 categorias selecionadas pelo usuário
  
  // Data e hora de INÍCIO da viagem (separados)
  startDate: string;  // Formato: YYYY-MM-DD (ex: "2025-11-03")
  startTime: string;  // Formato: HH:MM (ex: "13:00")
  
  // Data e hora de FIM da viagem (separados)
  endDate: string;    // Formato: YYYY-MM-DD (ex: "2025-11-06")
  endTime: string;    // Formato: HH:MM (ex: "14:00")
}

/**
 * Response com o roteiro turístico gerado
 */
export interface GenerateTourResponse {
  success: boolean;                   // Se a geração foi bem-sucedida
  itinerary: DayItinerary[];          // Roteiro organizado por dia
  summary: string;                    // Resumo geral do roteiro
  generatedBy: 'ai' | 'fallback';     // Origem da geração (IA ou fallback local)
  model?: string;                     // Nome do modelo usado (ex: "gemini-2.5-flash")
  totalDays: number;                  // Total de dias do roteiro
  
  // Metadados úteis para o frontend
  metadata: {
    startDateTime: string;            // ISO completo do início (ex: "2025-11-03T13:00:00-03:00")
    endDateTime: string;              // ISO completo do fim
    preferencesUsed: CategoryPreference[];  // Categorias usadas na geração
  };
}

/**
 * Itinerário de um dia específico
 */
export interface DayItinerary {
  date: string;           // DD/MM/YYYY (formato brasileiro para display)
  dayOfWeek: string;      // "Segunda-feira", "Terça-feira", etc.
  dayNumber: number;      // 1, 2, 3... (número sequencial do dia)
  activities: Activity[]; // Lista de atividades do dia
  recommendations: string; // Recomendações gerais para o dia
}

/**
 * Atividade individual no roteiro
 */
export interface Activity {
  time: string;           // HH:MM (ex: "09:00", "14:30")
  title: string;          // Título da atividade
  description: string;    // Descrição detalhada
  type: 'event' | 'attraction' | 'trail' | 'meal' | 'rest';  // Tipo de atividade
  entityId?: string;      // ID da entidade original no banco (se aplicável)
  duration?: string;      // Duração estimada (ex: "2 horas", "3h30min")
  location?: ActivityLocation;  // Localização (se aplicável)
  tips?: string[];        // Dicas específicas para a atividade
}

/**
 * Localização de uma atividade
 */
export interface ActivityLocation {
  address: string;        // Endereço completo
  neighborhood: string;   // Bairro
  mapUrl: string;        // URL do Google Maps
  coordinates?: {
    latitude: number;
    longitude: number;
  };
}

