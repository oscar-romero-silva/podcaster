import {Link} from 'react-router-dom';
import Indicator from './Indicator';

function Header() {
  return (
    <header className="flex items-center justify-between px-2 py-1 text-sky-700 shadow-md">
      <Link to="/" className="flex gap-2">
        <img
          src="../../../public/podcastIcon.ico"
          alt="podcaster-icon"
          width="30px"
          className="object-fill rounded-md"
        />
        <h1 className="text-xl font-bold">Podcaster</h1>
      </Link>
      {true && <Indicator />}
    </header>
  );
}

export default Header;
