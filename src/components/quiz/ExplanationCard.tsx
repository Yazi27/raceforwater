"use client";

import Link from "next/link";

export default function ExplanationCard({
  currentIndex,
  total,
  answered,
  question
}: {
  currentIndex: number;
  total: number;
  answered: boolean | null;
  question: any;
}) {
  return (
    <div className="flex flex-col items-start justify-start bg-white ring-2 ring-black p-6 rounded-lg shadow-[6px_6px_0px_rgba(0,0,0,0.3)] h-full md:h-[500px] w-full max-w-xl">
      <div className="mb-4 font-semibold">
        Question {currentIndex + 1}/{total}
      </div>
      <h3 className="text-2xl font-bold mb-4">Comment ça marche ?</h3>
      <p className="mb-6">
        Sélectionnez « Vrai » ou « Faux » pour chaque question. Une fois
        votre réponse soumise, vous verrez ci-dessous une explication ou une
        confirmation.
      </p>

      {answered !== null && (
        <div className="bg-white w-full p-4">
          {answered ? (
            <p className="text-green-700 font-bold">
              Bravo, c&apos;est la bonne réponse !
            </p>
          ) : (
            <p className="text-red-700 font-bold">
              Dommage, ce n&apos;est pas la bonne réponse.
            </p>
          )}
          <p className="mt-2">{question.explanation}</p>
          {question.source && (
            <p className="mt-2 text-blue-700 font-bold text-sm italic underline break-words">
              <Link href={question.source} target="_blank" rel="noopener noreferrer">
                {question.source}
              </Link>
            </p>
          )}
        </div>
      )}
    </div>
  );
}
