const AccuracyBox = () => {
  return (
    <div className="bg-[#E5E7EB] w-[548px] h-[132px] rounded-lg py-4 px-6">
      <div className="flex justify-between">
        <span>정확도</span>
        <span className="font-semibold text-[#059669]">83%</span>
      </div>
      <div className="text-[#D97706] flex items-center mt-3">
        <span
          className="material-symbols-outlined mr-1"
          style={{ fontVariationSettings: `"FILL" 1` }}
        >
          warning
        </span>
        <span>좀더 손가락을 움직여보세요</span>
      </div>
    </div>
  );
};
export default AccuracyBox;
