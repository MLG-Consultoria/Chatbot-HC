import React, { useEffect, useState } from "react";
import { getConsultasAPI } from "../../services/consultaService";
import type { ConsultaResponse } from "../../services/consultaService";
import BotaoVoltar from "../../components/BotaoVoltar";
import LoadingCircle from "../../components/LoadingCircle";
import { FaCalendarAlt, FaCalendarTimes } from 'react-icons/fa';

const VerConsultas: React.FC = () => {
  const [consultas, setConsultas] = useState<ConsultaResponse[]>([]);
  const [loading, setLoading] = useState(true);
  const [erro, setErro] = useState<string | null>(null);

  useEffect(() => {
    async function carregarConsultas() {
      try {
        const dados = await getConsultasAPI();
        const ordenadas = dados.sort(
          (a: ConsultaResponse, b: ConsultaResponse) =>
            new Date(b.data_hora_consulta).getTime() -
            new Date(a.data_hora_consulta).getTime()
        );
        setConsultas(ordenadas);
      } catch (error: any) {
        setErro(error.message || "Erro ao carregar consultas");
      } finally {
        setLoading(false);
      }
    }

    carregarConsultas();
  }, []);

  const formatarData = (dataISO: string) => {
    if (!dataISO) return "—";
    const data = new Date(dataISO);
    if (isNaN(data.getTime())) return "—";
    return data.toLocaleString("pt-BR", {
      dateStyle: "short",
      timeStyle: "short",
    });
  };

  const statusTexto = (status: number) => {
    switch (status) {
      case 0:
        return "🟢 Agendada";
      case 1:
        return "✅ Concluída";
      case 2:
        return "❌ Cancelada";
      default:
        return "—";
    }
  };

  return (
    <main className="flex-grow p-4 sm:p-8">
      <div className="max-w-5xl mx-auto mt-10">
        <h1 className="text-3xl font-bold text-center mb-8 text-blue-700">
          Consultas Agendadas
        </h1>

        {/* Estado de carregamento */}
        {loading && (
          <p className="text-center text-gray-500 text-lg flex items-center justify-center gap-2 flex-col">
            <LoadingCircle /> Carregando consultas...
          </p>
        )}

        {/* Estado de erro */}
        {erro && (
          <div className="text-center mt-20">
            <p className="text-center text-red-500 text-lg mb-3">{erro}</p>
            <p className="text-gray-600">Desculpe, nenhuma consulta foi encontrada. Tente recarregar a página</p>
            <p className="text-gray-600">Caso precise de ajuda, entre em contato com o suporte.</p>
            <a
              href="/SuporteSite"
              className="mt-4 inline-block bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
            >
              Acessar Suporte
            </a>
          </div>
        )}

        {/* Nenhum resultado */}
        {!loading && consultas.length === 0 && !erro && (
          <div className="text-center text-gray-600 mt-20">
            <p className="text-xl">Nenhuma consulta marcada ainda.</p>
            <p>Vá para a página “Marcar Consulta” para agendar a sua.</p>
          </div>
        )}

        {/* Lista de consultas */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {consultas.map((consulta) => (
            <div
              key={consulta.id_consulta}
              className="bg-white rounded-xl shadow-md border border-blue-300 p-6 hover:shadow-lg transition-shadow duration-200"
            >
              <h3 className="text-lg font-bold text-blue-700 mb-2">
                📅 {formatarData(consulta.data_hora_consulta)}
              </h3>

              <p>
                <strong>Status:</strong>{" "}
                <span>{statusTexto(consulta.status_consulta)}</span>
              </p>

              <p>
                <strong>Médico:</strong>{" "}
                {consulta.medico_resp?.nome || "A definir"}
              </p>

              <p>
                <strong>Especialidade:</strong>{" "}
                {consulta.medico_resp?.especialidade?.nome || "—"}
              </p>

              {consulta.hospital?.nome && (
                <p>
                  <strong>Hospital:</strong> {consulta.hospital.nome}
                </p>
              )}

              {consulta.link && (
                <p className="mt-2 text-blue-600 text-sm break-all">
                  🔗{" "}
                  <a
                    href={consulta.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:text-blue-800"
                  >
                    {consulta.link}
                  </a>
                </p>
              )}
                <div className="flex flex-row gap-10 mt-4 items-center justify-center ">
                  <button aria-label="Remarcar consulta" className="ml-4">
                    <FaCalendarAlt size={30} />
                  </button>

                  <button aria-label="Desmarcar consulta" className="">
                    <FaCalendarTimes size={30} />
                  </button>
                </div>
            </div>
          ))}
        </div>

        {/* Botão Voltar */}
        <div className="flex justify-center mt-10">
          <BotaoVoltar />
        </div>
      </div>
    </main>
  );
};

export default VerConsultas;
