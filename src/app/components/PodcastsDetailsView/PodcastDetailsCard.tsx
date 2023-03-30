import Podcast from '@/domain/Podcast';

type DetailsProp = {
  podcast: Podcast | null;
  onClick: () => void;
};
function PodcastCardDetails({podcast, onClick}: DetailsProp) {
  return (
    podcast && (
      <div className="bg-white rounded-lg shadow-custom flex flex-col divide-y px-4 pb-4">
        <button className="w-auto self-center my-6" type="button" onClick={onClick}>
          <img className="h-48 w-48 rounded-md" src={podcast?.img || ''} alt="PodcastDetails" />
        </button>
        <div className="py-4">
          <button className="flex flex-col text-start" type="button" onClick={onClick}>
            <h1 className="text-md font-bold">{podcast.name}</h1>
            <p className="text-sm italic">by {podcast.artist}</p>
          </button>
        </div>
        <div className="pt-4">
          <span className="text-sm font-bold">Description:</span>
          <p className="text-sm italic">{podcast.summary}</p>
        </div>
      </div>
    )
  );
}
export default PodcastCardDetails;
