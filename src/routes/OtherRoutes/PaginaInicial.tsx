import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

interface FormData {
  email: string;
  senha: string;
}

interface FormErrors {
  email?: string;
  senha?: string;
}

const MainHome: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({ email: '', senha: '' });
  const [errors, setErrors] = useState<FormErrors>({});
  const navigate = useNavigate();

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const validate = (): FormErrors => {
    const newErrors: FormErrors = {};
    if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Por favor, insira um email válido.';
    }
    if (formData.senha.trim().length < 10) {
      newErrors.senha = 'A senha deve ter pelo menos 10 caracteres.';
    }
    return newErrors;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setErrors(prev => ({ ...prev, [name]: undefined }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      navigate('/MainMenu');
    }
  };

  const isValid = emailRegex.test(formData.email) && formData.senha.trim().length >= 10;

    useEffect(() => {
    document.body.classList.add('hide-layout');
    return () => {
      document.body.classList.remove('hide-layout');
      document.body.style.overflow = 'auto';
    };
  }, []);


  return (
    <div className="flex flex-col items-center justify-center text-center p-8 bg-white rounded-lg shadow-xl w-auto mt-30 mb-30 sm:w-2/3 sm:mr-auto sm:ml-auto md:mt-40 sm:mt-30 border-2 border-blue-200">

      <h1 className="text-4xl font-bold text-gray-800">
        Seja Bem Vindo
      </h1>
      <h2 className="mt-2 text-xl text-gray-600">
        Ao projeto Chatbot - HC
      </h2>

      <div className="mt-10 flex flex-col justify-center items-center border-3 border-blue-400 rounded-3xl mb-4 w-full max-w-md p-6">
        <h3 className="text-3xl font-bold text-blue-600">
          Realizar Login
        </h3>

        <form onSubmit={handleSubmit} className="w-full mt-6 space-y-4 text-left">
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
            <label htmlFor="senha" className="block text-sm font-medium text-gray-700">
              Senha
            </label>
            <input
              type="password"
              id="senha"
              name="senha"
              value={formData.senha}
              onChange={handleChange}
              placeholder="Digite sua senha"
              className="mt-1 w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              required
            />
            {errors.senha && <p className="mt-1 text-sm text-red-500">{errors.senha}</p>}
          </div>

          <button
            type="submit"
            disabled={!isValid}
            className={`w-full mt-4 px-8 py-3 bg-blue-500 text-white font-semibold rounded-full shadow-md transition-transform transform hover:scale-105 duration-300 ease-in-out mb-3
              ${!isValid ? 'opacity-50 cursor-not-allowed hover:scale-100' : 'hover:bg-blue-600'}`}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default MainHome;
