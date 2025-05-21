import {
  AnswerButton,
  LearningVideo,
  PlayButton,
  ResultBox,
  SubmitButton,
} from "../components";
import { useAnswerSelection } from "../hooks/useAnswerSelection";

const Testing = () => {
  //TODO: words 정답 받아오고 나머지 3개 랜덤으로 받아오기
  const words = ["사과", "귤", "복숭아", "딸기"];
  const { selectedIndex, select } = useAnswerSelection();

  return (
    <div className="min-h-screen space-y-8 flex flex-col items-center mb-24">
      <div className="flex space-x-20 justify-center mt-20">
        <div className="space-y-4">
          <LearningVideo />
          <PlayButton />
        </div>

        <div className="space-y-4">
          {words.map((word, idx) => (
            <AnswerButton
              key={idx}
              index={idx + 1}
              label={word}
              isSelected={selectedIndex === idx}
              onClick={() => select(idx)}
            />
          ))}
          <SubmitButton />
        </div>
      </div>
      <ResultBox />
    </div>
  );
};

export default Testing;
