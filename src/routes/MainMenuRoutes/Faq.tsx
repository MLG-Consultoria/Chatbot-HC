import React, { useState } from 'react';

const faqData = [
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

interface FaqItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
} 

const FaqItem: React.FC<FaqItemProps> = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="border border-blue-300 rounded-lg p-4 transition-all duration-300 ease-in-out shadow-sm hover:shadow-md bg-white ">
      <button
        className="flex justify-between items-center w-full text-left font-semibold text-gray-700 focus:outline-none "
        onClick={onClick}
      >
        <span>❓ {question}</span>
        <span className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
          ▼
        </span>
      </button>
      <div
        className={`overflow-hidden transition-max-height duration-500 ease-in-out ${isOpen ? 'max-h-96 mt-4' : 'max-h-0'}`}
      >
        <p className="text-gray-600">{answer}</p>
      </div>
    </div>
  );
};

const Faq: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleItemClick = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white p-4 sm:p-8">
      <div className="max-w-4xl mx-auto flex flex-col items-center justify-center p-8 bg-blue-500 rounded-lg text-white shadow-lg text-center">
        <h1 className="text-3xl sm:text-4xl font-bold mb-2">Seja Bem-Vindo ao nosso FAQ</h1>
        <h2 className="text-xl sm:text-2xl font-light mb-6">Precisa de ajuda?</h2>
        <input
          type="text"
          placeholder="Encontre respostas para suas perguntas"
          className="p-3 rounded-lg w-full max-w-lg text-gray-800 border-2 border-blue-300 focus:border-blue-800 focus:outline-none"
        />
      </div>

      <div className="max-w-4xl mx-auto mt-20">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Perguntas frequentes
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {faqData.map((item, index) => (
            <FaqItem
              key={index}
              question={item.question}
              answer={item.answer}
              isOpen={openIndex === index}
              onClick={() => handleItemClick(index)}
            />
          ))}
        </div>
      </div>
    </main>
  );
};
export default Faq;