function PodcastsNotFound() {
  return (
    <div className="flex justify-center items-center">
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <div className="flex justify-center items-center flex-col">
          <h1 className="text-2xl font-bold mb-4">Error en la carga de archivos</h1>
          <p className="text-gray-700 mb-4">
            Lo sentimos, ha habido un error al cargar los archivos.
          </p>
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50"
            type="button"
            onClick={() => {
              window.location.reload();
            }}
          >
            Recargar la página
          </button>
        </div>
      </div>
    </div>
  );
}

export default PodcastsNotFound;
