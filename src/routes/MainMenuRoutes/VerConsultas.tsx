const VerConsultas = () => {
    return(
<main className="flex-grow p-4 sm:p-8">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto mt-10">
    
    <div className="bg-white rounded-xl shadow-md border border-blue-400 p-6">
      <h3 className="text-lg font-bold text-blue-600 mb-4">Consulta Marcada</h3>
      <p><strong>Doutor:</strong> Giovane Amato dos Santos</p>
      <p><strong>Horário da Consulta:</strong> 16:45</p>
      <p><strong>Especialidade:</strong> Cardiologista</p>
      <p className="text-sm text-gray-500 mt-2">
        Chegar com 15 minutos de antecedência para triagem.
      </p>
    </div>

    <div className="bg-white rounded-xl shadow-md border border-blue-400 p-6">
      <h3 className="text-lg font-bold text-blue-600 mb-4">Consulta Marcada</h3>
      <p><strong>Doutor:</strong> Lucas Figueiredo Vieira</p>
      <p><strong>Horário da Consulta:</strong> 14:30</p>
      <p><strong>Especialidade:</strong> Dermatologista</p>
      <p className="text-sm text-gray-500 mt-2">
        Chegar com 20 minutos de antecedência para triagem.
      </p>
    </div>

    <div className="bg-white rounded-xl shadow-md border border-blue-400 p-6 md:col-span-2 md:w-1/2 md:mx-auto">
      <h3 className="text-lg font-bold text-blue-600 mb-4">Consulta Marcada</h3>
      <p><strong>Doutor:</strong> Matheus Roque Arantes</p>
      <p><strong>Horário da Consulta:</strong> 10:15</p>
      <p><strong>Especialidade:</strong> Ortopedista</p>
      <p className="text-sm text-gray-500 mt-2">
        Chegar com 30 minutos de antecedência para triagem.
      </p>
    </div>

  </div>
</main>
    );
}

export default VerConsultas;