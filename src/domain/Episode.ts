import {EpisodeResponse} from '@/api/types';

export default class Episode {
  protected readonly episode: EpisodeResponse;

  constructor(episode: EpisodeResponse) {
    this.episode = episode;
  }

  get id(): number {
    return this.episode.trackId;
  }

  get description(): string {
    return this.episode.description || '';
  }

  get name(): string {
    return this.episode.trackName || '';
  }

  get releaseDate(): Date {
    return new Date(this.episode.releaseDate);
  }

  get duration(): number {
    return this.episode.trackTimeMillis || 0;
  }

  get episodeTrackUrl(): string {
    return this.episode.episodeUrl || '';
  }
}
