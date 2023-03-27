import Episode from '@/domain/Episode';
import Podcast from '@/domain/Podcast';

export interface IPodcastStore {
  readonly podcasts: readonly Podcast[];

  readonly podcast: Podcast | null;

  readonly loading: boolean;

  readonly podcastEpisodes: Episode[];

  getAllPodcasts: () => Promise<void>;

  getPodcast: (id: number) => Promise<void>;
}
