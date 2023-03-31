import {RouterProvider} from 'react-router-dom';
import {RecoilRoot} from 'recoil';
import {PodcasterProvider} from '../infrastructure/PodcastContextProvider';
import router from './router/router';

function App() {
  return (
    <RecoilRoot>
      <PodcasterProvider>
        <RouterProvider router={router} />
      </PodcasterProvider>
    </RecoilRoot>
  );
}

export default App;
