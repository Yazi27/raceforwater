"use client";

export default function StartScreen({ onStart}: { onStart: () => void; onOther: () => void }) {
  return (
    <div className="bg-white h-full ring-2 ring-black rounded-lg p-8 max-w-md shadow-[6px_6px_0px_rgba(0,0,0,0.3)] text-center">
      <h1 className="text-3xl font-bold mb-4">Bienvenue au Quiz Océan</h1>
      <p className="mb-6">
        Testez vos connaissances sur l&apos;océan et apprenez de nouvelles
        informations passionnantes.
      </p>
      <div className="flex space-x-4 justify-center">
        <button
          onClick={onStart}
          className="bg-blue-600 ring-2 ring-black text-white font-bold py-3 px-6 rounded-md hover:bg-blue-700 shadow active:underline transition-all duration-200"
        >
          Commencer le Quiz
        </button>
      </div>
    </div>
  );
}
