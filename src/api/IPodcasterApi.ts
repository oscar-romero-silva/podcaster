import {PodcastResponse, EpisodeResponse} from './types';

export interface IPodcasterApi {
  getAllPodcasts(): Promise<PodcastResponse[]>;

  getPodcast(id: number): Promise<EpisodeResponse[]>;
}
