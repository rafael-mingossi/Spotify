export type RootStackParamList = {
  Root: undefined;
  NotFound: undefined;
};

export type BottomTabParamList = {
  TabOne: undefined;
  TabTwo: undefined;
};

export type TabOneParamList = {
  TabOneScreen: undefined;
  AlbumScreen: undefined;
};

export type TabTwoParamList = {
  TabTwoScreen: undefined;
};

//Define a type to be used over the components
export type Album = {
  id: string;
  imageUri: string;
  artistHeadLine: string;
};

export type Song = {
  id: string;
  imageUri: string;
  title: string;
  artist: string;
};
