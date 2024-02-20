import { useState, useEffect } from "react";

// Quiz 컴포넌트 자식인 타이머
export default function QuestionTimer({ timeout, onTimeout, mode }) {
  const [remainingTime, setRemainingTime] = useState(timeout);

  // 의존성이 변경되면 함수를 재실행 의존성 => [timeout, onTimeout]
  useEffect(() => {
    const timer = setTimeout(onTimeout, timeout);

    return () => {
      clearTimeout(timer);
    };
  }, [timeout, onTimeout]);

  // 계속 재실행이 되지 않도록 useEffect 함수 안에 작성
  useEffect(() => {
    // 시간이 점점 줄어듬
    const interval = setInterval(() => {
      setRemainingTime((prevRemainingTime) => prevRemainingTime - 100);
    }, 100);

    // interval이 존재히는게 있다면 내용을 clear 처리
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <progress
      id="question-time"
      max={timeout}
      value={remainingTime}
      className={mode}
    />
  );
}
