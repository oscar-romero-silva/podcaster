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

type PriceType = LabelType & {
  attributes: Pick<AttributesType, 'amount' | 'currency'>;
};

type ContentType = {
  attributes: Pick<AttributesType, 'term' | 'label'>;
};

type LinkType = {
  attributes: Pick<AttributesType, 'rel' | 'type' | 'href'>;
};

type IdType = LabelType & {
  attributes: Pick<AttributesType, 'im:id'>;
};

type CategoryType = {
  attributes: Pick<AttributesType, 'term' | 'label'>;
};

type ReleaseDateType = LabelType & {
  attributes: Pick<AttributesType, 'label'>;
};

export type PodcastResponse = {
  'im:name': LabelType;
  'im:image': ImageType[];
  summary: LabelType;
  'im:price': PriceType;
  'im:contentType': ContentType;
  rights: LabelType;
  title: LabelType;
  link: LinkType;
  id: IdType;
  'im:artist': LabelType;
  category: CategoryType;
  'im:releaseDate': ReleaseDateType;
};

export type EpisodeResponse = {
  trackId: number;
  description: string;
  trackName: string;
  releaseDate: string;
  trackTimeMillis: number;
  trackViewUrl: string;
  episodeUrl: string;
};
