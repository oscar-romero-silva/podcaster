import {ApiResponse, PodcastResponse} from './types';

export interface IPodcasterApi {
  getAllPodcasts(): Promise<ApiResponse<PodcastResponse[]>>;

  // TODO: fix this
  getPodcast(id: number): Promise<ApiResponse<PodcastResponse>>;
}
