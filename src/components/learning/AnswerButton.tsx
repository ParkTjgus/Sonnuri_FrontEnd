interface WordButtonProps {
  index: number;
  label: string;
}

const AnswerButton = ({ index, label }: WordButtonProps) => {
  return (
    <button className="flex items-center bg-white h-[4.5rem] w-[544px] rounded-[20px] border border-[#c6c6c8] shadow-button text-left px-6 gap-8 text-2xl">
      <span className="inline-flex justify-center items-center w-12 h-12 bg-[#D9D9D9] rounded-full">
        {index}
      </span>
      {label}
    </button>
  );
};

export default AnswerButton;
