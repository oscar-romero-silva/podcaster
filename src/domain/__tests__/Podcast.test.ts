import {PodcastResponse} from '@/api/types';
import Podcast from '../Podcast';

describe('Podcast', () => {
  let podcast: Podcast;

  const mockPodcast: PodcastResponse = {
    'im:name': {label: 'Test Podcast'},
    'im:image': [
      {label: 'image1.jpg', attributes: {height: '100'}},
      {label: 'image2.jpg', attributes: {height: '200'}},
      {label: 'image3.jpg', attributes: {height: '300'}},
    ],
    summary: {label: 'This is a test podcast'},
    id: {label: '', attributes: {'im:id': '123'}},
    'im:artist': {label: 'Test Artist'},
    title: {label: 'Test Title'},
  };

  beforeEach(() => {
    podcast = new Podcast(mockPodcast);
  });

  it('should return the podcast name', () => {
    expect(podcast.name).toEqual(mockPodcast['im:name'].label);
  });

  it('should return the best image url', () => {
    expect(podcast.img).toEqual('image3.jpg');
  });

  it('should return the podcast summary', () => {
    expect(podcast.summary).toEqual(mockPodcast.summary.label);
  });

  it('should return the podcast id', () => {
    expect(podcast.id).toEqual(123);
  });

  it('should return the podcast artist', () => {
    expect(podcast.artist).toEqual(mockPodcast['im:artist'].label);
  });

  it('should return the podcast title', () => {
    expect(podcast.title).toEqual(mockPodcast.title.label);
  });
});
