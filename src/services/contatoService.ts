// ===========================
// 📡 Serviço para envio de contatos
// ===========================

const isLocalhost = window.location.hostname === "localhost";
const API_BASE_URL = isLocalhost
  ? "http://localhost:8080"
  : "https://java-sprint4-2.onrender.com";

export interface ContatoDTO {
  nome: string;
  email: string;
  mensagem: string;
  formulario_origem: "S" | "H"; // Suporte ou Hospital
  nota?: number; // opcional (1 = ruim, 2 = neutra, 3 = boa)
}

export async function enviarContatoAPI(dados: ContatoDTO): Promise<void> {
  const response = await fetch(`${API_BASE_URL}/contato`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(dados),
  });

  if (!response.ok) {
    const erro = await response.text();
    throw new Error(`Erro ao enviar contato: ${erro}`);
  }
}
