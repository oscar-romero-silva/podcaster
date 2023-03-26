import {Link} from 'react-router-dom';

function PageNotFound() {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-bold">404 - Página no encontrada</h1>
        <p className="mb-8 text-gray-500">
          Lo siento, la página que estás buscando no se encuentra disponible.
        </p>
        <Link to="/" className="inline-block px-4 py-2 text-white bg-blue-500 rounded">
          Ir al inicio
        </Link>
      </div>
    </div>
  );
}

export default PageNotFound;
