export interface Consulta {
  id: string; 
  paciente: string;
  data: string; 
  horario: string;
  especialidade: string;
  observacao?: string;
}