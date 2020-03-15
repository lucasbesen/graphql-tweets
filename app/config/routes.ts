const ROUTES = {
  HOME: 'Home',
} as const;

export type StackParamsList = {
  [ROUTES.HOME]: { search?: string };
};

export default ROUTES;
