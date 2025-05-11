import { AnswerButton } from "../components";

const Learning = () => {
  //TODO: words 정답 받아오고 나머지 3개 랜덤으로 받아오기
  const words = ["사과", "귤", "복숭아", "딸기"];

  return (
    <div className="space-y-[26px]">
      {words.map((word, idx) => (
        <AnswerButton index={idx + 1} label={word} />
      ))}
    </div>
  );
};

export default Learning;
