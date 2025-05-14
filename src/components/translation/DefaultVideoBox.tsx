const DefaultVideoBox = ({ content }: any) => {
    return (
        <div
            className="w-[560px] h-[336px] p-[10px]
            bg-[#F9FAFB] rounded-lg border-2 border-dashed flex justify-center items-center">
            {content}
        </div>
    )
}

export default DefaultVideoBox
