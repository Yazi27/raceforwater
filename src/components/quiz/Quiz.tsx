"use client";

import { useState, useEffect } from "react";
import questionsData from "@/app/explore/questions.json";
import StartScreen from "./StartScreen";
import PlaceholderContainer from "./PlaceholderContainer";
import EndScreen from "./EndScreen";
import QuizSection from "./QuizSection";

type Question = {
  question: string;
  answer: string;
  explanation: string;
  source: string;
  image: string;
};

export default function Quiz() {
  const [quizStarted, setQuizStarted] = useState(false);
  const [answered, setAnswered] = useState<boolean | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [correctCount, setCorrectCount] = useState(0);

  const [innerView, setInnerView] = useState<"quiz" | "other">("quiz");

  useEffect(() => {
    if (quizStarted) {
      const shuffled = [...questionsData.quiz].sort(() => 0.5 - Math.random());
      const selected = shuffled.slice(0, 8) as Question[];
      setQuestions(selected);
      setCurrentIndex(0);
      setAnswered(null);
      setCorrectCount(0);
    }
  }, [quizStarted]);

  const handleAnswer = (value: boolean) => {
    if (answered !== null) return;
    const userAnswer = value ? "Vrai" : "Faux";
    const isCorrect = userAnswer === questions[currentIndex].answer;
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

  if (!quizStarted) {
    return (
      <div className="flex flex-col h-full justify-center items-center">
        <StartScreen
          onStart={() => setQuizStarted(true)}
          onOther={() => setInnerView("other")}
        />
        {innerView === "other" && (
          <div className="mt-8">
            <PlaceholderContainer />
          </div>
        )}
      </div>
    );
  }

  if (questions.length === 0) {
    return <div className="text-center mt-20">Chargement...</div>;
  }

  if (quizStarted && isLastQuestion && answered !== null) {
    return (
      <EndScreen
        correctCount={correctCount}
        total={questions.length}
        finalMessage={finalMessage}
        onRestart={() => {
          setQuizStarted(false);
          setInnerView("quiz");
        }}
      />
    );
  }

  if (innerView === "other") {
    return <PlaceholderContainer />;
  }

  return (
    <QuizSection
      questions={questions}
      currentIndex={currentIndex}
      answered={answered}
      handleAnswer={handleAnswer}
      isLastQuestion={isLastQuestion}
      onNext={() => {
        setAnswered(null);
        setCurrentIndex(currentIndex + 1);
      }}
    />
  );
}
