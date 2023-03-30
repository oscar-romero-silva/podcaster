type LabelType = {
  label: string;
};

type AttributesType = {
  height: string;
  amount: string;
  currency: string;
  term: string;
  label: string;
  rel: string;
  type: string;
  href: string;
  'im:id': string;
  scheme: string;
};

export type ImageType = LabelType & {
  attributes: Pick<AttributesType, 'height'>;
};

type IdType = LabelType & {
  attributes: Pick<AttributesType, 'im:id'>;
};

export type PodcastResponse = {
  'im:name': LabelType;
  'im:image': ImageType[];
  summary: LabelType;
  title: LabelType;
  id: IdType;
  'im:artist': LabelType;
};

export type EpisodeResponse = {
  trackId: number;
  description: string;
  trackName: string;
  releaseDate: string;
  trackTimeMillis: number;
  episodeUrl: string;
};
