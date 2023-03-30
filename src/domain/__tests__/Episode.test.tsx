import {EpisodeResponse} from '@/api/types';
import Episode from '../Episode';

describe('Episode', () => {
  let episode: Episode;

  const mockEpisode: EpisodeResponse = {
    trackId: 123,
    trackName: 'Test Episode',
    description: 'This is a test episode',
    releaseDate: '2022-03-01T00:00:00Z',
    trackTimeMillis: 300000,
    episodeUrl: 'https://test-episode.com',
  };

  beforeEach(() => {
    episode = new Episode(mockEpisode);
  });

  it('should return the episode id', () => {
    expect(episode.id).toEqual(mockEpisode.trackId);
  });

  it('should return the episode description', () => {
    expect(episode.description).toEqual(mockEpisode.description);
  });

  it('should return the episode name', () => {
    expect(episode.name).toEqual(mockEpisode.trackName);
  });

  it('should return the episode release date as a Date object', () => {
    expect(episode.releaseDate instanceof Date).toBe(true);
    expect(episode.releaseDate.getFullYear()).toEqual(2022);
    expect(episode.releaseDate.getMonth()).toEqual(2);
    expect(episode.releaseDate.getDate()).toEqual(1);
  });

  it('should return the episode duration', () => {
    expect(episode.duration).toEqual(mockEpisode.trackTimeMillis);
  });

  it('should return the episode track url', () => {
    expect(episode.episodeTrackUrl).toEqual(mockEpisode.episodeUrl);
  });
});
