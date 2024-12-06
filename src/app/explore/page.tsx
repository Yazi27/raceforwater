"use client";

import { useState } from "react";
import Quiz from "@/components/quiz/Quiz";
import InteractiveMap from "@/components/interactive-map/InteractiveMap";

export default function Page() {
  const [view, setView] = useState<"choice" | "map" | "quiz">("choice");

  if (view === "map") {
    // Afficher uniquement la carte interactive
    return (
      <main className="h-screen bg-blue-300 bg-no-repeat bg-bottom bg-[url('/wave.svg')] p-4 flex items-center justify-center">
        <InteractiveMap />
      </main>
    );
  }

  if (view === "quiz") {
    // Afficher uniquement le quiz
    return (
      <main className="flex items-center justify-center min-h-screen bg-blue-300 bg-no-repeat bg-bottom bg-[url('/wave.svg')] p-4">
        <Quiz />
      </main>
    );
  }

  // Sinon, état initial "choice"
  return (
    <main className="min-h-screen bg-blue-300 bg-no-repeat bg-bottom bg-[url('/wave.svg')] p-4 flex flex-col items-center justify-center">
      <div className="bg-white ring-2 ring-black rounded-lg p-8 max-w-md text-center shadow-[6px_6px_0px_rgba(0,0,0,0.3)] space-y-4">
        <h1 className="text-3xl font-bold mb-4">Explorer</h1>
        <p className="text-lg mb-4">Choisissez ce que vous voulez explorer :</p>
        <div className="flex space-x-4 justify-center">
          <button
            onClick={() => setView("quiz")}
            className="bg-blue-600 ring-2 ring-black text-white font-bold py-2 px-6 rounded-md hover:bg-blue-700 shadow active:underline transition-all duration-200"
          >
            Aprenez avec notre Quiz Océan!
          </button>
          <button
            onClick={() => setView("map")}
            className="bg-sky-500 ring-2 ring-black text-white font-bold py-2 px-6 rounded-md hover:bg-gray-700 shadow active:underline transition-all duration-200"
          >
            Interactive Ocean/Human Diagram
          </button>
        </div>
      </div>
    </main>
  );
}
