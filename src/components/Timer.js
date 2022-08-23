import { useState } from "react";
import { useInterval } from "./hooks";
import "./styles.css";

const useResultOfIntervalCalculator = (calculator, delay) => {
  const [result, setResult] = useState(calculator());
  useInterval(() => {
    const newResult = calculator();
    if (newResult !== result) setResult(newResult);
  }, delay);

  return result;
};

const CountDownView = ({ targetISOString }) => {
  const remain = useResultOfIntervalCalculator(() =>
    Math.floor((new Date(targetISOString) - new Date()) / 1000, 10)
  );
  return <div className="CountDownWrap">남은 시간 : {remain}</div>;
};

export default function Timer() {
  const targetISOString = "2022-01-01T09:00:00.000Z";

  const isNotYet = useResultOfIntervalCalculator(
    () => new Date(targetISOString) - new Date() > 0,
    10
  );
  return (
    <div className="App">
      <CountDownView targetISOString={targetISOString} />
      {isNotYet ? "기다리세요." : "이미 지났습니다."}
    </div>
  );
}
