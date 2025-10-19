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
}
