const Header: React.FC = () => {
  const categories = [
    "학습하기",
    "미니게임",
    "신조어 등록",
    "수어 노래",
    "수어 번역",
  ];

  return (
    <header className="h-[4.5rem] relative flex justify-center items-center bg-white">
      {/* TODO: logo 삽입 */}
      {/* <div className="absolute left-6">
        <img src="/logo.png" />
      </div> */}
      <nav className="flex space-x-8 text-gray-600">
        {categories.map((element, idx) => (
          <button key={idx}>{element}</button>
        ))}
      </nav>
    </header>
  );
};

export default Header;
