import {createBrowserRouter} from 'react-router-dom';
import PageNotFound from '../pages/PageNotFound';
import PodcastDetailsView from '../pages/PodcastDetailsView';
import AppLayout from '../layout/AppLayout';
import EpisodeDetailsView from '../pages/EpisodeDetailsView';
import PodcastDetailsLayout from '../layout/PodcastDetailsLayout';
import PodcastsView from '../pages/PodcastsView';

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    errorElement: <PageNotFound />,
    children: [
      {
        index: true,
        element: <PodcastsView />,
      },
      {
        path: '/podcast/:podcastId',
        element: <PodcastDetailsLayout />,
        children: [
          {
            index: true,
            element: <PodcastDetailsView />,
          },
          {
            path: '/podcast/:podcastId/episode/:episodeId',
            element: <EpisodeDetailsView />,
          },
        ],
      },
    ],
  },
]);

export default router;
