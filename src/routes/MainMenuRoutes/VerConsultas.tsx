import React, { useEffect, useState } from "react";
import {
  getConsultasAPI,
  deletarConsultaAPI,
  atualizarConsultaAPI,
} from "../../services/consultaService";
import type { ConsultaResponse } from "../../services/consultaService";
import BotaoVoltar from "../../components/BotaoVoltar";
import LoadingCircle from "../../components/LoadingCircle";
import { FaCalendarAlt, FaCalendarTimes } from "react-icons/fa";

const VerConsultas: React.FC = () => {
  const [consultas, setConsultas] = useState<ConsultaResponse[]>([]);
  const [loading, setLoading] = useState(true);
  const [erro, setErro] = useState<string | null>(null);

  // Estado do modal de reagendamento
  const [reagendarId, setReagendarId] = useState<number | null>(null);
  const [novaData, setNovaData] = useState("");
  const [novoHorario, setNovoHorario] = useState("");
  const [mensagem, setMensagem] = useState<string | null>(null);

  useEffect(() => {
    carregarConsultas();
  }, []);

  useEffect(() => {
  if (mensagem) {
    const timer = setTimeout(() => setMensagem(null), 5000);
    return () => clearTimeout(timer);
  }
}, [mensagem]);

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

  // ===============================
  // ❌ Cancelar consulta
  // ===============================
  const handleCancelar = async (id: number) => {
    const confirmar = confirm("Tem certeza que deseja cancelar esta consulta?");
    if (!confirmar) return;

    try {
      await deletarConsultaAPI(id);
      setMensagem("❌ Consulta cancelada com sucesso!");
      await carregarConsultas();
    } catch (error: any) {
      setMensagem("⚠️ Erro ao cancelar: " + error.message);
    }
  };

  // ===============================
  // 🗓️ Confirmar reagendamento
  // ===============================
const confirmarReagendamento = async () => {
  if (!novaData || !novoHorario) {
    setMensagem("⚠️ Informe data e horário válidos.");
    return;
  }

  // ✅ Converte data local sem usar UTC
  const dataFormatada = novaData; 

  // ✅ Valida no front (evita envio inútil)
  const hoje = new Date();
  const limite = new Date();
  limite.setMonth(hoje.getMonth() + 1);

  if (new Date(novaData) < limite) {
    setMensagem("⚠️ A nova data deve ser pelo menos 1 mês após hoje.");
    return;
  }

  try {
    await atualizarConsultaAPI(reagendarId!, {
      dataConsulta: dataFormatada,
      horarioConsulta: novoHorario,
    });

    setMensagem("✅ Consulta reagendada com sucesso!");
    setReagendarId(null);
    setNovaData("");
    setNovoHorario("");
    await carregarConsultas();
  } catch (error: any) {
    setMensagem("❌ Erro ao reagendar: " + error.message);
  }
};

  const formatarData = (dataISO: string) => {
  if (!dataISO) return "—";
  const data = new Date(dataISO);

  if (isNaN(data.getTime())) return "—";

  return data.toLocaleString("pt-BR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
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

  // ===============================
  // 🎨 Renderização
  // ===============================
  return (
    <main className="flex-grow p-4 sm:p-8">
      <div className="max-w-5xl mx-auto mt-10">
        <h1 className="text-3xl font-bold text-center mb-8 text-blue-700">
          Consultas Agendadas
        </h1>

        {mensagem && (
          <div
            className={`relative flex justify-center items-center gap-2 mb-4 p-3 rounded shadow-md transition-opacity duration-500 ${
              mensagem.startsWith("✅")
                ? "bg-green-100 text-green-700 border border-green-300"
                : mensagem.startsWith("⚠️")
                ? "bg-yellow-100 text-yellow-700 border border-yellow-300"
                : "bg-red-100 text-red-700 border border-red-300"
            }`}
          >
            <span className="font-medium">{mensagem}</span>

            {/* Botão de fechar manualmente */}
            <button
              onClick={() => setMensagem(null)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-xl hover:opacity-70"
              aria-label="Fechar mensagem"
            >
              ×
            </button>
          </div>
        )}

        {loading && (
          <p className="text-center text-gray-500 text-lg flex items-center justify-center gap-2 flex-col">
            <LoadingCircle /> Carregando consultas...
          </p>
        )}

        {erro && (
          <div className="text-center mt-20">
            <p className="text-center text-red-500 text-lg mb-3">{erro}</p>
            <a
              href="/SuporteSite"
              className="mt-4 inline-block bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
            >
              Acessar Suporte
            </a>
          </div>
        )}

        {!loading && consultas.length === 0 && !erro && (
          <div className="text-center text-gray-600 mt-20">
            <p className="text-xl">Nenhuma consulta marcada ainda.</p>
            <p>Vá para a página “Marcar Consulta” para agendar a sua.</p>
          </div>
        )}

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

              <p>
                <strong>Hospital:</strong>{" "}
                {consulta.hospital?.nome || "—"}
              </p>

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

              <div className="flex flex-row gap-10 mt-4 items-center justify-center">
                <button
                  aria-label="Reagendar consulta"
                  onClick={() => setReagendarId(consulta.id_consulta)}
                  disabled={consulta.status_consulta !== 0}
                >
                  <FaCalendarAlt
                    size={28}
                    color={consulta.status_consulta === 0 ? "black" : "gray"}
                  />
                </button>

                <button
                  aria-label="Cancelar consulta"
                  onClick={() => handleCancelar(consulta.id_consulta)}
                  disabled={consulta.status_consulta !== 0}
                >
                  <FaCalendarTimes
                    size={28}
                    color={consulta.status_consulta === 0 ? "black" : "gray"}
                  />
                </button>
              </div>

              {/* 💬 Modal de reagendamento */}
              {reagendarId === consulta.id_consulta && (
                <div className="mt-4 border-t border-blue-200 pt-4">
                  <h4 className="font-semibold mb-2 text-blue-700">
                    Reagendar Consulta
                  </h4>
                  <div className="flex flex-col gap-2">
                    <input
                      type="date"
                      value={novaData}
                      onChange={(e) => setNovaData(e.target.value)}
                      className="border border-gray-300 rounded p-2"
                    />
                    <input
                      type="time"
                      value={novoHorario}
                      onChange={(e) => setNovoHorario(e.target.value)}
                      className="border border-gray-300 rounded p-2"
                    />
                    <div className="flex justify-end gap-3 mt-2">
                      <button
                        onClick={() => setReagendarId(null)}
                        className="px-3 py-1 rounded bg-gray-300 hover:bg-gray-400"
                      >
                        Cancelar
                      </button>
                      <button
                        onClick={confirmarReagendamento}
                        className="px-3 py-1 rounded bg-blue-600 text-white hover:bg-blue-700"
                      >
                        Confirmar
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-10">
          <BotaoVoltar />
        </div>
      </div>
    </main>
  );
};

export default VerConsultas;
