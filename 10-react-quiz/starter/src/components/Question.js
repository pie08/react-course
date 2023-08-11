import { useQuestions } from "../context/QuestionsContext";
import Options from "./Options";

function Question() {
  const { question } = useQuestions();

  return (
    <div>
      <h4>{question.question}</h4>
      <Options />
    </div>
  );
}

export default Question;
