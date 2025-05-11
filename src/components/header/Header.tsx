import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <header className="h-[4.5rem] relative flex justify-center items-center bg-white">
      {/* TODO: logo 삽입 */}
      {/* <div className="absolute left-6">
        <img src="/logo.png" />
      </div> */}

      <nav className="flex space-x-8 text-gray-600">
        <Link to="/learning">학습하기</Link>
        <Link to="/">미니게임</Link>
        <Link to="/">신조어 등록</Link>
        <Link to="/">수어 노래</Link>
        <Link to="/translation">수어 번역</Link>
      </nav>
    </header>
  );
};

export default Header;
