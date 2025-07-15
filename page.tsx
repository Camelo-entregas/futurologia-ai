export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-black text-white p-6">
      <h1 className="text-4xl font-bold mb-6 text-center">Futurologia AI ⚽</h1>
      <p className="text-lg mb-4 text-center">Digite abaixo o confronto que deseja analisar:</p>

      <form className="w-full max-w-md">
        <input
          type="text"
          placeholder="Ex: Real Madrid x Barcelona"
          className="w-full p-3 rounded-lg text-black mb-4"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 w-full"
        >
          Analisar Partida
        </button>
      </form>
    </main>
  );
}