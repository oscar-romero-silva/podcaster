import {Link} from 'react-router-dom';
import Podcast from '@/domain/Podcast';

type PodcastCardProps = {
  podcast: Podcast;
};

function PodcastCard({podcast}: PodcastCardProps) {
  const img = podcast?.img || '';
  return (
    <Link
      to={`/podcast/${podcast.id}`}
      className="p-4 mt-28 bg-white rounded-lg 
      shadow-custom hover:shadow-custom-xl scale-100 hover:scale-105 
      transition duration-300 ease-in-out w-full md:w-1/5 mx-2 min-w-[343px]"
    >
      <div className="flex justify-center -mt-24">
        <img
          className="object-cover h-44 w-44 rounded-full"
          alt="Podcast Avatar"
          loading="lazy"
          src={img}
        />
      </div>

      <h2 className="flex justify-center my-2 text-xl font-semibold text-gray-800 uppercase text-center line-clamp-2">
        {podcast.name}
      </h2>

      <div className="flex justify-center">
        <h6 className="text-lg font-medium text-gray-500 text-center">Author: {podcast.artist}</h6>
      </div>
    </Link>
  );
}

export default PodcastCard;
