import PodcastDetailsView from '../pages/PodcastDetailsView';
import PodcastsView from '../pages/PodcastsView';
import {RouterType} from './types';

const routerPagesData: RouterType[] = [
  {
    path: '/',
    element: <PodcastsView />,
    title: 'podcasts',
  },
  {
    path: '/podcast/:podcastId',
    element: <PodcastDetailsView />,
    title: 'podcast-details',
  },
];

export default routerPagesData;
