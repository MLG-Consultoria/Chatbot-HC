const SobreNos = () => {
  return (
    <section className="w-full bg-gradient-to-b from-blue-50 to-white py-12 px-4 flex justify-center ">
      <div className="max-w-3xl w-full bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-blue-300 flex flex-col items-center ">
        
        <img
          src="/Logo-MLG.jpeg" 
          alt="Logo MLG"
          className="w-32 h-auto mb-6 md:w-40 lg:w-48 object-contain rounded-2xl border-blue-700 border-4"
        />

        <h2 className="text-3xl md:text-4xl font-bold text-blue-700 text-center mb-6">
          Sobre Nós
        </h2>

        <p className="text-gray-700 leading-relaxed mb-4 text-justify">
          Nosso projeto foi desenvolvido para o Hospital das Clínicas com o objetivo de tornar o acesso às teleconsultas mais simples, rápido e acessível para todos. Criamos um chatbot integrado ao site e ao Telegram, capaz de atender usuários por texto e áudio, oferecendo suporte ágil e humanizado.
        </p>
        <p className="text-gray-700 leading-relaxed text-justify">
          Essa solução inovadora visa reduzir barreiras no atendimento remoto, direcionando o paciente de forma segura e eficiente para a teleconsulta. Combinamos tecnologia e cuidado para proporcionar uma experiência mais prática, acolhedora e inclusiva para pacientes e profissionais de saúde.
        </p>
      </div>
    </section>
  );
};

export default SobreNos;