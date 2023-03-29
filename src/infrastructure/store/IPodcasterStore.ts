import Episode from '@/domain/Episode';
import Podcast from '@/domain/Podcast';

export interface IPodcastStore {
  readonly podcasts: readonly Podcast[];

  readonly podcast: Podcast | null;

  readonly loading: boolean;

  readonly isFetchError: boolean;

  readonly podcastEpisodes: Episode[];

  readonly episode: Episode | null;

  getAllPodcasts: () => Promise<void>;

  getPodcast: (id: number) => Promise<void>;

  getEpisode: (id: number) => Promise<void>;
}
