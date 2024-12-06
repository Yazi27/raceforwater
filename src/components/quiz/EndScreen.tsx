"use client";

import Link from "next/link";

export default function EndScreen({
  correctCount,
  total,
  finalMessage,
  onRestart
}: {
  correctCount: number;
  total: number;
  finalMessage: string;
  onRestart: () => void;
}) {
  return (
    <main className="flex flex-col items-center justify-center h-full bg-blue-300 bg-no-repeat bg-bottom p-4">
      <div className="bg-white ring-2 ring-black rounded-lg p-8 max-w-md shadow-[6px_6px_0px_rgba(0,0,0,0.3)] text-center">
        <h2 className="text-3xl font-bold mb-4">Quiz terminé !</h2>
        <p className="text-xl font-semibold mb-4">
          Vous avez {correctCount} bonne(s) réponse(s) sur {total}.
        </p>
        <p className="mb-6">{finalMessage}</p>
        <div className="flex space-x-4 justify-center">
          <button
            onClick={onRestart}
            className="bg-blue-600 ring-2 ring-black text-white font-bold py-2 px-6 rounded-md hover:bg-blue-700 shadow active:underline transition-all duration-200"
          >
            Recommencer
          </button>
          <Link
            href="/"
            className="bg-gray-600 ring-2 ring-black text-white font-bold py-2 px-6 rounded-md hover:bg-gray-700 shadow active:underline transition-all duration-200"
          >
            Accueil
          </Link>
        </div>
      </div>
    </main>
  );
}
