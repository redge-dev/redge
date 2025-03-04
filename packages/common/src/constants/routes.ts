export enum API_ROUTES {
  AUTH_SIGNIN_WITH_MAGIC_LINK = "/api/auth/signin/magic-link"
}

export enum ROUTES {
  AUTH_CALLBACK = "/auth/callback",
  AUTH_SIGNIN = "/auth/signin",
  /**
   * Protected
   */
  HOME = "/"
}

export const PUBLIC_ROUTES = new Set<`${ROUTES}` | string>([
  ROUTES.AUTH_SIGNIN,
  ROUTES.AUTH_CALLBACK
]);
