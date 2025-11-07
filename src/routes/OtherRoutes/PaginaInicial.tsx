import { useEffect } from 'react'; 
import { useNavigate } from 'react-router-dom';
import LoadingCircle from '../../components/LoadingCircle';

const MainHome = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/MainMenu'); 
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate]);

  useEffect(() => {
    document.body.classList.add('hide-layout');
    return () => {
      document.body.classList.remove('hide-layout');
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <div className="flex flex-col items-center justify-center text-center p-8 bg-white rounded-lg shadow-xl w-auto mt-40 mb-30 sm:w-2/3 sm:mr-auto sm:ml-auto md:mt-60 sm:mt-30 border-2 border-blue-200">
      <h1 className="text-4xl font-bold text-gray-800">
        Seja Bem Vindo
      </h1>
      <h2 className="mt-2 text-xl text-gray-600">
        Ao projeto Chatbot - HC
      </h2>

      <div className="mt-10 flex flex-col justify-center items-center border-3 border-blue-400 rounded-3xl mb-4 w-full max-w-md p-6">
        <h3 className="text-3xl font-bold text-blue-600">
          Aguarde um Momento
        </h3>
        <p className="mt-4 text-gray-700">
          Carregando seus dados!
        </p>
        <div className="mt-6">
          <LoadingCircle />
        </div>
      </div>
    </div>
  );
};

export default MainHome;