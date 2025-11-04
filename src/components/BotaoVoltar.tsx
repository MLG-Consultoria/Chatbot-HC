const BotaoVoltar = () => {
    return(
        <div className="flex flex-col justify-center items-start p-4 sm:p-8">
            <button onClick={() => window.history.back()} className="w-30 h-12 rounded-lg border border-blue-300 duration-300 cursor-pointer bg-blue-500 text-white font-bold text-lg hover:bg-blue-700 hover:scale-110 hover:transform">
            ← Voltar
            </button>
        </div>
    );
}

export default BotaoVoltar