export const faqData = [
  {
    question: 'O que é o Projeto Chatbot HC?',
    answer:
      'O Projeto Chatbot HC é uma solução criada para ajudar usuários do Hospital das Clínicas a se conectarem corretamente às teleconsultas. Ele atua como um suporte intermediário que orienta os pacientes no processo de acesso e no correto posicionamento da câmera antes da consulta.',
  },
  {
    question: 'Por que esse projeto foi criado?',
    answer:
      'Porque muitos pacientes tinham dificuldades para se conectar à teleconsulta ou não conseguiam posicionar a câmera corretamente, o que prejudicava a avaliação médica. Isso gerava perda de tempo e afetava a qualidade do atendimento.',
  },
  {
    question: 'O projeto ajuda durante a consulta também?',
    answer:
      'Não diretamente. A principal função é preparar o usuário antes da consulta, garantindo que ele entre na sala virtual com tudo pronto para que o médico possa iniciar o atendimento sem atrasos.',
  },
  {
    question: 'Como isso ajuda a reduzir o absenteísmo?',
    answer:
      'Ao facilitar o acesso e preparar melhor o paciente para a consulta, o projeto evita que os usuários desistam ou se atrasem por dificuldades técnicas. Isso contribui diretamente para a meta de reduzir a taxa de absenteísmo para menos de 10%.',
  },
  {
    question: 'Quem pode usar esse serviço?',
    answer:
      'Qualquer usuário do sistema de teleconsulta do Hospital das Clínicas que tenha dificuldades com tecnologia, especialmente aqueles com pouca familiaridade com aplicativos e smartphones.',
  },
  {
    question: 'Preciso instalar algum aplicativo novo?',
    answer:
      'Não. A proposta é que o suporte seja integrado ao fluxo já existente do app do HC, apenas facilitando e orientando o usuário de forma mais clara.',
  },
  {
    question: 'O que acontece se eu ainda tiver problemas para me conectar?',
    answer:
      'O projeto inclui orientações claras e simples, mas se ainda houver dificuldades, haverá um canal de suporte para contato com a equipe técnica.',
  },
  {
    question: 'Esse projeto substitui o app do HC?',
    answer:
      'Não. Ele complementa o app do HC, atuando como uma ponte para facilitar o uso e melhorar a experiência do paciente com as teleconsultas.',
    },
];

export interface FaqItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
} 