export interface MovieType {
  _id: string;
  id: string;
  primaryImage: {
    id: string;
    width: number;
    height: number;
    url: string;
    __typename: string;
    caption: {
      plainText: string;
      __typename: string;
    } | null;
  };
  titleType: {
    displayableProperty: {
      value: {
        plainText: string;
        __typename: string;
      };
      __typename: string;
    };
    text: string;
    id: string;
    isSeries: boolean;
    isEpisode: boolean;
    category: Array<string>;
    canHaveEpisodes: boolean;
    __typename: string;
  };
  titleText: {
    text: string;
    __typename: string;
  };
  originalTitleText: {
    text: string;
    __typename: string;
  };
  releaseYear: {
    year: number;
    endYear: number | null;
    __typename: string;
  } | null;
  releaseDate: {
    day: number;
    month: number;
    year: number;
    __typename: string;
  } | null;
}
