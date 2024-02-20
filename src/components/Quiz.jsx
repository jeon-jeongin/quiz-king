import { useState, useCallback } from "react";
import QUESTIONS from "../questions.js";
import Question from "./Question.jsx";
import Summary from "./Summary.jsx";

export default function Quiz() {
  // 사용자가 선택할 답변 리스트
  const [userAnswers, setUserAnswers] = useState([]);

  // 리액트는 최소한의 상태를 가지고 있는 것이 좋다
  const activeQuestionIndex = userAnswers.length;

  // 현재 답변 인덱스 값이 퀴즈의 양과 동일한지 -> 퀴즈가 마무리됐는지 확인
  const quizIsComplete = activeQuestionIndex === QUESTIONS.length;

  // 정답을 하여 답변리스트에 담기위한 함수
  const handleSelectAnswer = useCallback(function handleSelectAnswer(
    selectedAnswer
  ) {
    setUserAnswers((prevUserAnswers) => {
      return [...prevUserAnswers, selectedAnswer];
    });
  },
  []);

  // [] => 배열이 어디서 사용될지 모르느 모든 의존성을 나타냄
  const hendleSkipAnswer = useCallback(
    () => handleSelectAnswer(null),
    [handleSelectAnswer]
  );

  if (quizIsComplete) {
    return <Summary userAnswers={userAnswers} />;
  }

  // key는 다른 항목에 대한 내용을 감지하는데 사용된다
  return (
    <div id="quiz">
      <Question
        key={activeQuestionIndex}
        index={activeQuestionIndex}
        onselectAnswer={handleSelectAnswer}
        onSkipAnswer={hendleSkipAnswer}
      />
    </div>
  );
}
