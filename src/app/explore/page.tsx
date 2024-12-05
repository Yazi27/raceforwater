"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import questionsData from "./questions.json"; // Import questions from JSON

export default function Page() {
  const [quizStarted, setQuizStarted] = useState(false);
  const [answered, setAnswered] = useState<boolean | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [questions, setQuestions] = useState<any[]>([]);
  const [correctCount, setCorrectCount] = useState(0);

  useEffect(() => {
    if (quizStarted) {
      const shuffled = [...questionsData.questions].sort(() => 0.5 - Math.random());
      const selected = shuffled.slice(0, 8);
      setQuestions(selected);
      setCurrentIndex(0);
      setAnswered(null);
      setCorrectCount(0);
    }
  }, [quizStarted]);

  const handleAnswer = (value: boolean) => {
    if (answered !== null) return; // Already answered
    const isCorrect = value === questions[currentIndex].correct;
    setAnswered(isCorrect);
    if (isCorrect) setCorrectCount((prev) => prev + 1);
  };

  const isLastQuestion = questions.length > 0 && currentIndex === questions.length - 1;

  const finalMessage = (() => {
    const ratio = correctCount / (questions.length || 1);
    if (ratio === 1) {
      return "Incroyable ! Vous avez répondu correctement à toutes les questions !";
    } else if (ratio >= 0.75) {
      return "Très bien joué ! Vous connaissez très bien ce sujet.";
    } else if (ratio >= 0.5) {
      return "Pas mal, vous avez de bonnes bases mais pouvez encore progresser.";
    } else {
      return "C'est un début, continuez à apprendre et vous ferez mieux la prochaine fois.";
    }
  })();

  // Start screen
  if (!quizStarted) {
    return (
      <main className="flex flex-col items-center justify-center min-h-screen bg-blue-300 p-4">
        <div className="bg-white ring-2 ring-black rounded-lg p-8 max-w-md shadow-[6px_6px_0px_rgba(0,0,0,0.3)] text-center">
          <h1 className="text-3xl font-bold mb-4">Bienvenue au Quiz Océan</h1>
          <p className="mb-6">
            Testez vos connaissances sur l'océan et apprenez de nouvelles informations passionnantes.
          </p>
          <button
            onClick={() => setQuizStarted(true)}
            className="bg-blue-600 ring-2 ring-black text-white font-bold py-3 px-6 rounded-md hover:bg-blue-700 shadow active:underline transition-all duration-200"
          >
            Commencer le Quiz
          </button>
        </div>
      </main>
    );
  }

  // Loading or no questions scenario
  if (questions.length === 0) {
    return <div className="text-center mt-20">Chargement...</div>;
  }

  // End screen (after last question answered)
  if (quizStarted && isLastQuestion && answered !== null) {
    return (
      <main className="flex flex-col items-center justify-center min-h-screen bg-blue-300 p-4">
        <div className="bg-white ring-2 ring-black rounded-lg p-8 max-w-md shadow-[6px_6px_0px_rgba(0,0,0,0.3)] text-center">
          <h2 className="text-3xl font-bold mb-4">Quiz terminé !</h2>
          <p className="text-xl font-semibold mb-4">
            Vous avez {correctCount} bonne(s) réponse(s) sur {questions.length}.
          </p>
          <p className="mb-6">{finalMessage}</p>
          <div className="flex space-x-4 justify-center">
            <button
              onClick={() => setQuizStarted(false)}
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

  const currentQuestion = questions[currentIndex];

  {/* Quiz screen */}
  return (
    <main className="flex flex-col min-h-screen bg-blue-300 p-4 pt-[100px]">
      {/* Top Title */}
      <header className="max-w-xl mx-auto mb-4 text-center">
        <h1 className="text-4xl font-extrabold text-white drop-shadow-md">Quiz Océan</h1>
      </header>

      {/* Progress Bar */}
      <div className="w-full max-w-xl mx-auto mb-4">
        <div className="ring-2 ring-black bg-white h-4 rounded-full overflow-hidden">
          <div
            className="bg-blue-600 h-full transition-all duration-300"
            style={{ width: `${((currentIndex + 1) / questions.length) * 100}%` }}
          ></div>
        </div>
      </div>

      <div className="flex-1 flex flex-col md:flex-row items-center justify-center max-w-7xl mx-auto w-full gap-8">
        {/* Left side: Quiz card */}
        <div className="flex flex-col items-center justify-start w-full md:w-auto">
          <div className="bg-white ring-2 ring-black rounded-lg w-full max-w-xl p-6 flex flex-col items-center shadow-[6px_6px_0px_rgba(0,0,0,0.3)] h-[550px]">
            <div className="w-full h-48 relative mb-4">
              <Image
                src={currentQuestion.image}
                alt="Question Image"
                fill
                className="object-cover rounded-md"
              />
            </div>
            <h2 className="text-xl font-bold text-center mb-6">
              {currentQuestion.question}
            </h2>

            {/* True / False Buttons */}
            <div className="flex space-x-4 mb-4">
              <button
                onClick={() => handleAnswer(true)}
                disabled={answered !== null}
                className={`bg-blue-600 ring-black shadow-[3px_4px_1px_rgba(0,0,0,0.1)] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md active:underline transition-all duration-200 ${
                  answered !== null && "opacity-50 cursor-not-allowed"
                }`}
              >
                Vrai
              </button>
              <button
                onClick={() => handleAnswer(false)}
                disabled={answered !== null}
                className={`bg-red-500 ring-black shadow-[3px_4px_1px_rgba(0,0,0,0.1)] hover:bg-red-600 text-white font-bold py-2 px-4 rounded-md active:underline transition-all duration-200 ${
                  answered !== null && "opacity-50 cursor-not-allowed"
                }`}
              >
                Faux
              </button>
            </div>

            {/* Next Question button under True/False */}
            {answered !== null && !isLastQuestion && (
              <button
                onClick={() => {
                  setAnswered(null);
                  setCurrentIndex(currentIndex + 1);
                }}
                className="mt-auto bg-blue-600 text-white py-2 px-6 rounded-md ring-2 ring-black hover:bg-blue-700 font-bold shadow active:underline"
              >
                Question Suivante
              </button>
            )}
          </div>
        </div>

        {/* Right side: Explanation or instructions */}
        <div className="flex flex-col items-start justify-start bg-white ring-2 ring-black p-6 rounded-lg shadow-[6px_6px_0px_rgba(0,0,0,0.3)] h-[550px] w-full max-w-xl">
          <div className="mb-4 font-semibold">
            Question {currentIndex + 1}/{questions.length}
          </div>
          <h3 className="text-2xl font-bold mb-4">Comment ça marche ?</h3>
          <p className="mb-6">
            Sélectionnez « Vrai » ou « Faux » pour chaque question. Une fois votre
            réponse soumise, vous verrez ci-dessous une explication ou une confirmation.
          </p>

          {answered !== null && (
            <div className="bg-white p-4 rounded-md shadow-md">
              {answered ? (
                <p className="text-green-700 font-bold">
                  Bravo, c'est la bonne réponse !
                </p>
              ) : (
                <p className="text-red-700 font-bold">
                  Dommage, ce n'est pas la bonne réponse.
                </p>
              )}
              <p className="mt-2">{currentQuestion.explanation}</p>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
