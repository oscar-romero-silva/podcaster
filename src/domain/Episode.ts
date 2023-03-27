import {EpisodeResponse} from '@/api/types';

export default class Episode {
  protected readonly episode: EpisodeResponse;

  constructor(episode: EpisodeResponse) {
    this.episode = episode;
  }

  get name(): string {
    return this.episode.trackName || '';
  }

  get releaseDate(): Date | string {
    return new Date(this.episode.releaseDate) || '';
  }

  get duration(): number {
    return this.episode.trackTimeMillis || 0;
  }

  get episodeTrackUrl(): string {
    return this.episode.trackViewUrl || '';
  }
}
