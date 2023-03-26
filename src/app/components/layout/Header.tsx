import Indicator from './Indicator';

function Header() {
  return (
    <header className="flex items-center justify-between px-2 py-1 text-sky-700 shadow-md">
      <h1 className="text-xl font-bold">Podcaster</h1>
      {true && <Indicator />}
    </header>
  );
}

export default Header;
