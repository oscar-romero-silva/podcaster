import {allOrigins} from '@/config/AxiosConfig';
import {IPodcasterApi} from './IPodcasterApi';
import ApiConfig from './PodcasterApiConfig';
import {PodcastResponse, EpisodeResponse} from './types';

export default class PodcasterApi extends ApiConfig implements IPodcasterApi {
  async getAllPodcasts(): Promise<PodcastResponse[]> {
    return this.axios
      .get(allOrigins(`${this.path}/us/rss/toppodcasts/limit=100/genre=1310/json`))
      .then(response => response.data)
      .then(data => JSON.parse(data.contents).feed.entry);
  }

  async getPodcast(id: number): Promise<EpisodeResponse[]> {
    return this.axios
      .get(allOrigins(`${this.path}/lookup?id=${id}&media=podcast&entity=podcastEpisode&limit=20`))
      .then(response => response.data)
      .then(data => JSON.parse(data.contents).results);
  }
}
