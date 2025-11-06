import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import Notificacao from '../../components/Notificacao';
import BotaoVoltar from "../../components/BotaoVoltar";
import { enviarContatoAPI } from "../../services/contatoService";

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

const ContatoComHC: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [showNotification, setShowNotification] = useState(false);
  const navigate = useNavigate();

  const validate = (): FormErrors => {
    const newErrors: FormErrors = {};
    if (formData.name.trim().length < 3)
      newErrors.name = 'O nome deve ter pelo menos 3 caracteres.';
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email))
      newErrors.email = 'Por favor, insira um email válido.';
    if (formData.message.trim().length < 10)
      newErrors.message = 'A mensagem deve ter pelo menos 10 caracteres.';
    return newErrors;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // 🔹 Tornar função async pois usa await
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      try {
        await enviarContatoAPI({
          nome: formData.name,
          email: formData.email,
          mensagem: formData.message,
          formulario_origem: "H", // ✅ Hospital
        });

        setShowNotification(true);
        setFormData({ name: '', email: '', message: '' });

        setTimeout(() => {
          setShowNotification(false);
          navigate('/MenuPrincipal');
        }, 3000);
      } catch (error: any) {
        console.error("Erro ao enviar contato:", error.message);
        alert("❌ Erro ao enviar o contato. Tente novamente.");
      }
    }
  };

  return (
    <>
      <div className="flex-grow flex items-center justify-center max-h-screen h-200 -mt-10 sm:-mt-27">
        {showNotification && (
          <Notificacao onClose={() => setShowNotification(false)} />
        )}

        <div className="w-full md:max-w-8/12 bg-white rounded-2xl shadow-lg p-6 border-3 border-blue-300 sm:max-w-screen">
          <h1 className="text-center text-3xl font-semibold text-gray-800">
            Entre em contato conosco
          </h1>
          <p className="text-center text-gray-600 mb-6 text-2xl">
            Preencha o formulário abaixo para nos enviar sua mensagem
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Nome
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Digite seu nome"
                className="mt-1 w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                required
              />
              {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Digite seu email"
                className="mt-1 w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                required
              />
              {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Mensagem
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                placeholder="Digite sua mensagem"
                className="mt-1 w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                required
              ></textarea>
              {errors.message && <p className="mt-1 text-sm text-red-500">{errors.message}</p>}
            </div>

            <button
              type="submit"
              className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
            >
              Enviar
            </button>
          </form>
        </div>
      </div>
      <div className='flex justify-center -mt-15 sm:-mt-25'>
        <BotaoVoltar />
      </div>
    </>
  );
};

export default ContatoComHC;
