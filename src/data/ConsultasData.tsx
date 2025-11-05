export interface Consultas {
  id: number;
  nomeDoutor: string;
  horario: string | number;
  descricao: string;
  local: string;
}

export const unidades: Consultas[] = [
  {
    id: 1,
    nomeDoutor: 'Dr. Carlos Almeida',
    horario: '08:00',
    descricao: 'Consulta de Rotina - Clínica Geral',
    local: 'Av. Dr. Enéas Carvalho de Aguiar, 255 - Cerqueira César, São Paulo - SP, 05403-000',
  },
  {
    id: 2,
    nomeDoutor: 'Dra. Beatriz Martins',
    horario: '09:30',
    descricao: 'Acompanhamento Psiquiátrico',
    local: 'R. Dr. Ovídio Pires de Campos, 785 - Cerqueira César, São Paulo - SP, 05403-010',
  },
  {
    id: 3,
    nomeDoutor: 'Dr. Ricardo Souza',
    horario: '10:15',
    descricao: 'Sessão de Fisioterapia',
    local: 'Rua Domingo de Soto, 100 - Vila Mariana, São Paulo - SP, 04116-030',
  },
  {
    id: 4,
    nomeDoutor: 'Dra. Juliana Ferreira',
    horario: '11:00',
    descricao: 'Exame Cardiológico (Ecocardiograma)',
    local: 'Av. Dr. Enéas Carvalho de Aguiar, 44 - Cerqueira César, São Paulo - SP, 05403-900',
  },
  {
    id: 5,
    nomeDoutor: 'Dr. Marcos Oliveira',
    horario: '13:30',
    descricao: 'Retorno Ambulatorial - Dermatologia',
    local: 'Av. Dr. Enéas Carvalho de Aguiar, 155 - 8o. andar - bloco laranja - Cerqueira César, São Paulo - SP, 05403-000',
  },
  {
    id: 6,
    nomeDoutor: 'Dra. Camila Ribeiro',
    horario: '14:45',
    descricao: 'Avaliação Ortopédica - Pós-operatório',
    local: 'R. Dr. Ovídio Pires de Campos, 333 - Cerqueira César, São Paulo - SP, 05403-010',
  },
  {
    id: 7,
    nomeDoutor: 'Dr. Fernando Costa',
    horario: '15:00',
    descricao: 'Consulta Pediátrica',
    local: 'Av. Dr. Enéas Carvalho de Aguiar, 647 - Cerqueira César, São Paulo - SP, 05403-000',
  },
  {
    id: 8,
    nomeDoutor: 'Dra. Amanda Silva',
    horario: '16:20',
    descricao: 'Agendamento de Tomografia Computadorizada',
    local: '03178-200 - Cerqueira César (localizado em: Hospital das Clínicas FMUSP)',
  },
  {
    id: 9,
    nomeDoutor: 'Dr. Gustavo Pereira',
    horario: '17:00',
    descricao: 'Apresentação de Projeto de Inovação',
    local: 'R. Dr. Ovídio Pires de Campos - Cerqueira César, São Paulo - SP, 05401-000',
  },
  {
    id: 10,
    nomeDoutor: 'Dra. Vanessa Lima',
    horario: '08:45',
    descricao: 'Reunião Administrativa',
    local: 'R. Dr. Ovídio Pires de Campos, 225 - Cerqueira César, São Paulo - SP, 05402-000',
  },
];