import {Link, useNavigation} from 'react-router-dom';
import Indicator from './Indicator';

function Header() {
  const navigation = useNavigation();

  return (
    <header className="flex items-center justify-between px-2 py-1 text-sky-700 shadow-custom">
      <Link to="/" className="flex gap-2">
        <img
          src="/podcastIcon.ico"
          alt="podcaster-icon"
          width="30px"
          height="30px"
          className="object-fill rounded-md"
        />
        <h1 className="text-xl font-bold">Podcaster</h1>
      </Link>
      {navigation.state === 'loading' && <Indicator />}
    </header>
  );
}

export default Header;
