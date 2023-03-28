import {createBrowserRouter} from 'react-router-dom';
import PodcastsView from '../pages/PodcastsView';
import PageNotFound from '../pages/PageNotFound';
import PodcastDetailsView from '../pages/PodcastDetailsView';
import Layout from '../layout/Layout';
import EpisodeDetailsView from '../pages/EpisodeDetailsView';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <PageNotFound />,
    children: [
      {
        index: true,
        id: 'index',
        element: <PodcastsView />,
      },
      {
        id: 'podcast',
        path: 'podcast/:podcastId',
        element: <PodcastDetailsView />,
      },
      {
        id: 'episode',
        path: 'podcast/:podcastId/episode/:episodeId',
        element: <EpisodeDetailsView />,
      },
    ],
  },
]);

export default router;
