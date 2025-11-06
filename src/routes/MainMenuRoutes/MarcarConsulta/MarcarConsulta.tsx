import React, { useState } from "react";
import { agendarConsultaAPI } from "../../../services/consultaService";
import type { ConsultaDTO, ConsultaResponse } from "../../../services/consultaService";
import BotaoVoltar from "../../../components/BotaoVoltar";

const MarcarConsulta: React.FC = () => {
  const [cpfPaciente, setCpfPaciente] = useState("");
  const [data, setData] = useState("");
  const [horario, setHorario] = useState("");
  const [especialidade, setEspecialidade] = useState("");
  const [loading, setLoading] = useState(false);
  const [mensagem, setMensagem] = useState<string | null>(null);
  const [consultaCriada, setConsultaCriada] = useState<ConsultaResponse | null>(null);

  const validarCpf = (cpf: string): boolean => /^\d{11}$/.test(cpf);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setMensagem(null);
    setConsultaCriada(null);

    if (!cpfPaciente || !data || !horario || !especialidade) {
      setMensagem("⚠️ Por favor, preencha todos os campos.");
      return;
    }

    if (!validarCpf(cpfPaciente)) {
      setMensagem("⚠️ CPF inválido. Deve conter 11 dígitos numéricos.");
      return;
    }

    const dataSelecionada = new Date(`${data}T${horario}`);
    if (dataSelecionada <= new Date()) {
      setMensagem("⚠️ A data/hora da consulta deve ser futura.");
      return;
    }

    setLoading(true);

    try {
      const novaConsulta: ConsultaDTO = {
        cpfPaciente,
        especialidade,
        dataConsulta: data,
        horarioConsulta: horario,
      };

      const resposta = await agendarConsultaAPI(novaConsulta);
      console.log("✅ Consulta criada:", resposta);

      setConsultaCriada(resposta);
      setMensagem("✅ Consulta marcada com sucesso!");
      setCpfPaciente("");
      setData("");
      setHorario("");
      setEspecialidade("");
    } catch (error: any) {
      console.error("Erro ao agendar consulta:", error);
      setMensagem(error.message || "❌ Erro ao agendar consulta. Tente novamente.");
    } finally {
      setLoading(false);
    }
  };

  const formatarData = (dataISO?: string) => {
    if (!dataISO) return "—";
    const data = new Date(dataISO);
    return isNaN(data.getTime())
      ? "—"
      : data.toLocaleString("pt-BR", { dateStyle: "short", timeStyle: "short" });
  };

  return (
    <main className="flex flex-col justify-center items-center mt-10">
      <div className="flex flex-col justify-center items-center p-10 border border-blue-300 rounded-lg shadow-lg bg-white w-full max-w-lg">
        <h1 className="text-3xl font-bold mb-6">Marcar Consulta</h1>

        <form onSubmit={handleSubmit} className="w-full flex flex-col gap-4">
          {/* CPF */}
          <div>
            <label htmlFor="cpfPaciente" className="block text-sm font-medium text-gray-700">
              CPF do Paciente
            </label>
            <input
              type="text"
              id="cpfPaciente"
              value={cpfPaciente}
              onChange={(e) => setCpfPaciente(e.target.value.replace(/\D/g, ""))}
              placeholder="Apenas números"
              maxLength={11}
              className="mt-1 block w-full rounded-md border border-blue-300 shadow-sm p-2"
            />
          </div>

          {/* Especialidade */}
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
            </select>
          </div>

          {/* Data */}
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

          {/* Horário */}
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

          {/* Botão */}
          <button
            type="submit"
            disabled={loading}
            className={`w-full text-white font-bold py-2 px-4 rounded-lg transition-colors mt-4 ${
              loading ? "bg-gray-400" : "bg-blue-600 hover:bg-blue-700"
            }`}
          >
            {loading ? "⏳ Enviando..." : "Marcar"}
          </button>

          {/* Mensagem */}
          {mensagem && (
            <p
              className={`mt-4 text-center text-sm font-medium ${
                mensagem.startsWith("✅")
                  ? "text-green-600"
                  : mensagem.startsWith("⚠️")
                  ? "text-yellow-600"
                  : "text-red-600"
              }`}
            >
              {mensagem}
            </p>
          )}
        </form>

        {/* Exibe resumo da consulta criada */}
        {consultaCriada && (
          <div className="mt-6 w-full bg-blue-50 border border-blue-200 rounded-lg p-4 text-sm">
            <h3 className="text-blue-700 font-semibold mb-2">📋 Consulta criada:</h3>
            <p><strong>Data e Hora:</strong> {formatarData(consultaCriada.data_hora_consulta)}</p>
            <p><strong>Status:</strong> {consultaCriada.status_consulta === 0 ? "Agendada" : "—"}</p>
            {consultaCriada.link && (
              <p className="mt-2 text-blue-600 break-all">
                <a href={consultaCriada.link} target="_blank" rel="noopener noreferrer">
                  {consultaCriada.link}
                </a>
              </p>
            )}
          </div>
        )}
      </div>

      <div className="flex justify-center left-0 right-0 mt-4">
        <BotaoVoltar />
      </div>
    </main>
  );
};

export default MarcarConsulta;
