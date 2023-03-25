import {PodcasterProvider} from '../infrastructure/PodcastContextProvider';
import Layout from './layout/Layout';
import PodcastsView from './pages/PodcastsView';

function App() {
  return (
    <Layout>
      <PodcasterProvider>
        <PodcastsView />
      </PodcasterProvider>
    </Layout>
  );
}

export default App;
