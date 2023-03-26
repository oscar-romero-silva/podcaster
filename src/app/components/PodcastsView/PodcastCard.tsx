import {Podcast} from '../../../domain/Podcast';

function PodcastCard({podcast}: {podcast: Podcast}) {
  return (
    <div className="px-8 py-4 mt-28 bg-white cursor-pointer rounded-lg shadow-md hover:shadow-xl md:w-1/4 sm:w-1/3 lg:w-1/5 w-[365px] min-w-[343px] scale-100 hover:scale-105 transition duration-300 ease-in-out ">
      <div className="flex justify-center -mt-20 ">
        <img
          className="object-cover w-28 h-28 rounded-full "
          alt="Testimonial avatar"
          src="https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=76&q=80"
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
    </div>
  );
}

export default PodcastCard;
