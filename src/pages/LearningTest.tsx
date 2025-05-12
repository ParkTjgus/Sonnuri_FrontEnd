import {
  AccuracyBox,
  AnswerBox,
  CameraBox,
  LearningVideo,
  NextButton,
  PracticeButton,
} from "../components";

const LearningTest = () => {
  return (
    <div className="flex justify-center items-center min-h-screen mb-24 mt-20 min-w-[1100px]">
      <div className="grid grid-cols-2 gap-y-10 gap-x-12">
        {/* row: 0, col: 0 */}
        <span className="text-lg">제시어</span>
        {/* row: 0, col: 1 */}
        <span className="text-lg">실시간 카메라</span>
        {/* row: 1, col: 0*/}
        <div className="space-y-4">
          <LearningVideo />
          <PracticeButton />
        </div>
        {/* row: 1, col: 1*/}
        <CameraBox />
        {/* row: 2, col: 0*/}
        <AnswerBox />
        {/* row: 2, col: 1*/}
        <div className="space-y-4">
          <AccuracyBox />
          <NextButton />
        </div>
      </div>
    </div>
  );
};

export default LearningTest;
