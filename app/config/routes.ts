const ROUTES = {
  HOME: 'Home',
  SEARCH: 'Search',
} as const;

export type StackParamsList = {
  [ROUTES.HOME]: { search?: string };
  [ROUTES.SEARCH]: undefined;
};

export default ROUTES;
