import {ReactNode} from 'react';
import Podcast from '@/domain/Podcast';
import PodcastCardDetails from './PodcastCardDetails';

type LayoutProps = {
  children: ReactNode;
  podcast: Podcast | null;
};

function DetailsLayout({children, podcast}: LayoutProps) {
  return (
    <div className="flex flex-col md:flex-row h-screen gap-y-10 md:gap-20">
      <div className="md:w-1/5 w-full">
        <PodcastCardDetails podcast={podcast} />
      </div>
      <div className="md:w-4/5 w-ful">{children}</div>
    </div>
  );
}

export default DetailsLayout;
