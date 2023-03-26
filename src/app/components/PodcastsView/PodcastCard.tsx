import {Link} from 'react-router-dom';
import Podcast from '../../../domain/Podcast';

type PodcastCardProps = {
  podcast: Podcast;
};

function PodcastCard({podcast}: PodcastCardProps) {
  const img = podcast?.img || '';
  return (
    <Link
      to={`/podcast/${podcast.id}`}
      className="px-8 py-4 mt-28 bg-white rounded-lg shadow-md hover:shadow-xl md:w-1/4 sm:w-1/3 lg:w-1/5 w-[365px] min-w-[343px] scale-100 hover:scale-105 transition duration-300 ease-in-out "
    >
      <div className="flex justify-center -mt-20 ">
        <img
          className="object-cover w-28 h-28 rounded-full"
          alt="Podcast Avatar"
          loading="lazy"
          src={img}
        />
      </div>

      <h2 className="flex justify-center my-2 text-xl font-semibold text-gray-800 uppercase text-center line-clamp-2">
        {podcast.name}
      </h2>

      <div className="flex justify-center">
        <span className="text-lg font-medium text-gray-500 text-center">
          Author: {podcast.artist}
        </span>
      </div>
    </Link>
  );
}

export default PodcastCard;
