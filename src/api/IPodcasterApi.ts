import {PodcastsApiResponse, PodcastResponse, EpisodeApiResponse, EpisodeResponse} from './types';

export interface IPodcasterApi {
  getAllPodcasts(): Promise<PodcastsApiResponse<PodcastResponse[]>>;

  getPodcast(id: number): Promise<EpisodeApiResponse<EpisodeResponse[]>>;
}
