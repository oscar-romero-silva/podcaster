import {RouterProvider} from 'react-router-dom';
import {PodcasterProvider} from '../infrastructure/PodcastContextProvider';
import router from './router/router';

function App() {
  return (
    <PodcasterProvider>
      <RouterProvider router={router} />
    </PodcasterProvider>
  );
}

export default App;
