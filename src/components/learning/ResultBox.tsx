const ResultBox = () => {
  //TODO: 결과 받아와서 결과에 따른 오답, 정답 text 출력
  //TODO: 틀린횟수 counting
  return (
    <div className="w-[1184px] h-72 bg-white shadow-button rounded-[20px] border border-[#8080808C] flex justify-center items-center text-center">
      {
        <div className="h-64 w-full flex justify-center items-center border-r border-black text-5xl">
          {/*
          if correct ?
          <span className="text-blue-500">정답</span>:
          */}
          <span className="text-red-500">오답</span>
        </div>
      }
      <div className="h-64 w-full flex justify-center items-center text-5xl">
        틀린횟수 : 0번
      </div>
    </div>
  );
};

export default ResultBox;
