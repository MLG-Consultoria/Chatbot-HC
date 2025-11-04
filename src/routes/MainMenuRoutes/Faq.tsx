import React, { useState } from 'react';
import BotaoVoltar from '../components/BotaoVoltar';
import { faqData, type FaqItemProps } from '../data/FaqData';

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

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
      <div className='flex justify-center mb-5 sm:mb-0'>
      <BotaoVoltar />
    </div>
    </main>
  );
};

export default Faq;