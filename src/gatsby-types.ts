export type GatsbyPageProps = {
  children: React.ReactNode | void;
  location: Location;
  navigate: (to: string, options: object) => void;
  pageContext: {};
  pageResources: {
    json: {
      pageContext: {};
    };
    page: {
      componentChunkName: string;
      matchPath: string | void;
      path: string;
      webpackCompilationHash: string;
    };
  };
  path: string;
  pathContext: {};
  uri: string;
};
