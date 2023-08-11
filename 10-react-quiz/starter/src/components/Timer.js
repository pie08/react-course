import { useEffect } from "react";
import { useQuestions } from "../context/QuestionsContext";

function Timer() {
  const { dispatch, secondsRemaining } = useQuestions();

  const minutes = Math.floor(secondsRemaining / 60);
  const seconds = secondsRemaining % 60;

  useEffect(
    function () {
      const id = setInterval(function () {
        // console.log("tick");
        dispatch({ type: "tick" });
      }, 1000);

      return () => clearInterval(id);
    },
    [dispatch]
  );

  return (
    <div className="timer">
      {`${minutes}`.padStart(2, 0)}:{`${seconds}`.padStart(2, 0)}
    </div>
  );
}

export default Timer;
