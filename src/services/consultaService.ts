// ===========================
// consultaService.ts
// Compatível com Render e localhost
// ===========================

export interface ConsultaDTO {
  cpfPaciente: string;
  especialidade: string;
  dataConsulta: string;
  horarioConsulta: string;
}

export interface ConsultaResponse {
  id_consulta: number;
  data_hora_consulta: string;
  status_consulta: number;
  link?: string;
  paciente?: { nome?: string };
  medico_resp?: {
    nome?: string;
    especialidade?: { nome?: string };
  };
  hospital?: { nome?: string };
}

// 🔧 Detecta ambiente automaticamente
const isLocalhost = window.location.hostname === "localhost";
const API_BASE_URL = isLocalhost
  ? "http://localhost:8080"
  : "https://java-sprint4-2.onrender.com";

// 💤 Acorda servidor Render se necessário
async function wakeServer(): Promise<void> {
  if (!isLocalhost) {
    try {
      await fetch(API_BASE_URL, { method: "GET" });
    } catch {
      console.warn("Render ainda acordando...");
    }
  }
}

// ===========================
// 📤 POST: Agendar Consulta
// ===========================
export async function agendarConsultaAPI(dados: ConsultaDTO): Promise<ConsultaResponse> {
  await wakeServer();

  try {
    const response = await fetch(`${API_BASE_URL}/consultas/agendar`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(dados),
    });

    if (!response.ok) {
      const erro = await response.text();
      throw new Error(`Erro ao agendar consulta: ${erro}`);
    }

    return await response.json();
  } catch (error: any) {
    if (error.message.includes("Failed to fetch")) {
      throw new Error("⚠️ O servidor pode estar iniciando... aguarde alguns segundos e tente novamente.");
    }
    throw error;
  }
}

// ===========================
// 📥 GET: Listar Consultas
// ===========================
export async function getConsultasAPI() {
  await wakeServer();

  const response = await fetch(`${API_BASE_URL}/consultas`);
  if (!response.ok) {
    throw new Error(`Erro ${response.status}: não foi possível carregar as consultas.`);
  }
  return response.json();
}

// ===========================
// ✏️ PUT: Reagendar Consulta
// ===========================
export async function atualizarConsultaAPI(id: number, dados: Partial<ConsultaDTO>) {
  await wakeServer();

  const response = await fetch(`${API_BASE_URL}/consultas/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(dados),
  });

  if (!response.ok) {
    throw new Error(`Erro ${response.status}: não foi possível atualizar a consulta.`);
  }

  return response.text();
}

// ===========================
// ❌ DELETE: Cancelar Consulta
// ===========================
export async function deletarConsultaAPI(id: number) {
  await wakeServer();

  const response = await fetch(`${API_BASE_URL}/consultas/${id}`, {
    method: "DELETE",
  });

  if (response.status === 204) return "Consulta excluída com sucesso!";
  if (response.status === 404) throw new Error("Consulta não encontrada.");

  throw new Error(`Erro ${response.status}: não foi possível excluir a consulta.`);
}
