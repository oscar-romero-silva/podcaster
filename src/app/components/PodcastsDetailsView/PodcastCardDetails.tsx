import Podcast from '@/domain/Podcast';

type DetailsProp = {
  podcast: Podcast | null;
};
function PodcastCardDetails({podcast}: DetailsProp) {
  return (
    podcast && (
      <div>
        <div className="max-w-2xl overflow-hidden bg-white rounded-lg shadow-custom flex flex-col divide-y px-4 pb-4">
          <img
            className="my-6 mx-8 h-48 w-48 rounded-md self-center"
            src={podcast?.img || ''}
            alt="PodcastDetails"
          />
          <div className="py-4">
            <span className="text-md font-bold">{podcast.name}</span>
            <p className="text-sm italic">by {podcast.artist}</p>
          </div>
          <div className="pt-4">
            <span className="text-sm font-bold">Description:</span>
            <p className="text-sm italic">{podcast.summary}</p>
          </div>
        </div>
      </div>
    )
  );
}
export default PodcastCardDetails;
