import {Link} from 'react-router-dom';
import useLoading from '@/infrastructure/hooks/useLoading';
import Loading from './Loading';

function Header() {
  const {loading} = useLoading();
  return (
    <header className="flex items-center w-full z-50 justify-between px-2 py-1 text-sky-700 shadow-custom fixed top-0 left-0 bg-white">
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
      {loading && <Loading />}
    </header>
  );
}

export default Header;
