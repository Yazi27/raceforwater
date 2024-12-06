"use client";

import Image from "next/image";
import ExplanationCard from "./ExplanationCard";
import QuestionCard from "./QuestionCard";

type Question = {
  question: string;
  answer: string;
  explanation: string;
  source: string;
  image: string;
};

interface QuizSectionProps {
  questions: Question[];
  currentIndex: number;
  answered: boolean | null;
  handleAnswer: (value: boolean) => void;
  isLastQuestion: boolean;
  onNext: () => void;
}

export default function QuizSection({
  questions,
  currentIndex,
  answered,
  handleAnswer,
  isLastQuestion,
  onNext,
}: QuizSectionProps) {
  const currentQuestion = questions[currentIndex];

  return (
    <main className="flex flex-col h-full bg-blue-300 bg-no-repeat bg-bottom bg-[url('/wave.svg')] p-4 pt-[74px]">
      {/* Top Title */}
      <header className="max-w-xl mx-auto mb-4 text-center">
        <h1 className="text-4xl font-extrabold text-white drop-shadow-md">
          Quiz Océan
        </h1>
      </header>

      {/* Progress Bar */}
      <div className="w-full max-w-xl mx-auto mb-8">
        <div className="ring-2 ring-black bg-white h-4 rounded-full overflow-hidden">
          <div
            className="bg-blue-600 h-full transition-all duration-300"
            style={{
              width: `${((currentIndex + 1) / questions.length) * 100}%`,
            }}
          ></div>
        </div>
      </div>

      <div className="flex-1 flex flex-col md:flex-row items-center justify-center max-w-7xl mx-auto w-full gap-8">
        <QuestionCard
          question={currentQuestion}
          answered={answered}
          handleAnswer={handleAnswer}
          isLastQuestion={isLastQuestion}
          onNext={onNext}
        >
          {" "}
          <div className="mb-4 md:mb-0 flex flex-col items-center">
            <div className="w-[200px] h-[200px]">
              <Image
                src={currentQuestion.image}
                alt={currentQuestion.question}
                layout="responsive"
                width={200}
                height={200}
                className="object-cover rounded-md"
              />
            </div>
          </div>
        </QuestionCard>
        <ExplanationCard
          currentIndex={currentIndex}
          total={questions.length}
          answered={answered}
          question={currentQuestion}
        />
      </div>
    </main>
  );
}
