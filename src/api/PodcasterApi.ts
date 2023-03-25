import {IPodcasterApi} from './IPodcasterApi';
import ApiConfig from './PodcasterApiConfig';
import {ApiResponse, PodcastResponse} from './types';

export default class PodcasterApi extends ApiConfig implements IPodcasterApi {
  async getAllPodcasts(): Promise<ApiResponse<PodcastResponse[]>> {
    return this.axios.get(`${this.path}/us/rss/toppodcasts/limit=100/genre=1310/json`);
  }

  async getPodcast(id: number): Promise<ApiResponse<PodcastResponse>> {
    return this.axios.get(
      `${this.path}/lookup?id=${id}&media=podcast&entity=podcastEpisode&limit=20`
    );
  }
}
