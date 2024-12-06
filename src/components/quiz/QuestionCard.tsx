"use client";

import Image from "next/image";

export default function QuestionCard({
  question,
  answered,
  handleAnswer,
  isLastQuestion,
  onNext,
  children,
}: {
  question: any;
  answered: boolean | null;
  handleAnswer: (value: boolean) => void;
  isLastQuestion: boolean;
  onNext: () => void;
  children: any;
}) {
  return (
    <div className="bg-white ring-2 ring-black rounded-lg w-full max-w-xl p-6 flex flex-col items-center shadow-[6px_6px_0px_rgba(0,0,0,0.3)] h-full md:h-[500px]">
      <div className="w-full h-48 relative mb-4">
        {children}
      </div>
      <h2 className="text-xl font-bold text-center mb-6">
        {question.question}
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

      {/* Next Question button */}
      {answered !== null && !isLastQuestion && (
        <button
          onClick={onNext}
          className="mt-auto bg-blue-600 text-white shadow-[3px_4px_1px_rgba(0,0,0,0.1)] py-2 px-6 rounded-md hover:bg-blue-700 font-bold active:underline"
        >
          Question Suivante
        </button>
      )}
    </div>
  );
}
