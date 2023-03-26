import Podcast from '../../domain/Podcast';

export interface IPodcastStore {
  readonly podcasts: readonly Podcast[];

  readonly podcast?: Podcast;

  getAllPodcasts: () => Promise<void>;

  getPodcast?: (id: number) => Promise<void>;
}
