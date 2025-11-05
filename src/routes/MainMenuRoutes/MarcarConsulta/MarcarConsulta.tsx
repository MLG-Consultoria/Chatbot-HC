import React, { useState } from 'react';
import type { Consulta } from './type'; 
import BotaoVoltar from "../../components/BotaoVoltar"

interface MarcarConsultaProps {
  onMarcarConsulta: (novaConsulta: Omit<Consulta, 'id'>) => void;
}

const MarcarConsulta = ({ onMarcarConsulta }: MarcarConsultaProps) => {
  const [paciente, setPaciente] = useState('');
  const [data, setData] = useState(''); 
  const [horario, setHorario] = useState('');
  const [especialidade, setEspecialidade] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); 

    if (!paciente || !data || !horario || !especialidade) { 
      alert('Por favor, preencha todos os campos.');
      return;
    }

    onMarcarConsulta({
      paciente,
      data, 
      horario,
      especialidade, 
      observacao: 'Chegar com 15 minutos de antecedência.',
      });

    setPaciente('');
    setData('');
    setHorario('');
    setEspecialidade('');
    alert('Consulta marcada com sucesso!');
  };

  return (
    <main className="flex flex-col justify-center items-center mt-10">
      <div className="flex flex-col justify-center items-center p-10 border border-blue-300 rounded-lg shadow-lg bg-white w-full max-w-lg">
        <h1 className="text-3xl font-bold mb-6">Marcar Consulta</h1>
        
        <form onSubmit={handleSubmit} className="w-full flex flex-col gap-4">
          <div>
            <label htmlFor="doutor" className="block text-sm font-medium text-gray-700">
              Nome do Paciente
            </label>
            <input
              type="text"
              id="paciente"
              value={paciente}
              onChange={(e) => setPaciente(e.target.value)}
              className="mt-1 block w-full rounded-md border border-blue-300 shadow-sm p-2"
              placeholder="Insira o nome do paciente"
            />
          </div>
          
          <div>
            <label htmlFor="especialidade" className="block text-sm font-medium text-gray-700">
              Especialidade
            </label>
            <select
              id="especialidade"
              value={especialidade} 
              onChange={(e) => setEspecialidade(e.target.value)} 
              className="mt-1 block w-full rounded-md border border-blue-300 shadow-sm p-2"
            >
              <option value="" disabled>Selecione uma especialidade</option>
              <option value="Cardiologia">Cardiologia</option>
              <option value="Dermatologia">Dermatologia</option>
              <option value="Ortopedia">Ortopedia</option>
              <option value="Neurologia">Neurologia</option>
              <option value="Pediatria">Pediatria</option>
              <option value="Clínica Geral">Clínica Geral</option>
            </select>
          </div>

          <div>
            <label htmlFor="data" className="block text-sm font-medium text-gray-700">
              Data da Consulta
            </label>
            <input
              type="date"
              id="data"
              value={data}
              onChange={(e) => setData(e.target.value)}
              className="mt-1 block w-full rounded-md border border-blue-300 shadow-sm p-2"
            />
          </div>

          <div>
            <label htmlFor="horario" className="block text-sm font-medium text-gray-700">
              Horário da Consulta
            </label>
            <input
              type="time"
              id="horario"
              value={horario}
              onChange={(e) => setHorario(e.target.value)}
              className="mt-1 block w-full rounded-md border border-blue-300 shadow-sm p-2"
            />
          </div>

          <button 
            type="submit"
            className="w-full bg-blue-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors mt-4"
          >
            Marcar
          </button>
        </form>
      </div>
      <div className="flex justify-center left-0 right-0">
    <BotaoVoltar />
  </div>
    </main>
  );
};

export default MarcarConsulta;