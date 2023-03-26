import {PodcastResponse, ImageType} from '../api/types';

type ImgType = {
  url: string;
  height: number;
};

export default class Podcast {
  protected readonly podcast: PodcastResponse;

  constructor(podcast: PodcastResponse) {
    this.podcast = podcast;
  }

  get name(): string {
    return this.podcast['im:name'].label || '';
  }

  get img(): ImgType[] {
    return this.podcast['im:image'].map((img: ImageType) => {
      return {url: img.label, height: Number(img.attributes.height)};
    });
  }

  get summary(): string {
    return this.podcast.summary.label || '';
  }

  get id(): number {
    return Number(this.podcast.id.attributes['im:id']);
  }

  get artist(): string {
    return this.podcast['im:artist'].label || '';
  }

  get title(): string {
    return this.podcast.title.label || '';
  }
}
