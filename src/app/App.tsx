import {BrowserRouter} from 'react-router-dom';
import {PodcasterProvider} from '../infrastructure/PodcastContextProvider';
import Layout from './layout/Layout';
import Router from './router/Router';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <PodcasterProvider>
          <Router />
        </PodcasterProvider>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
