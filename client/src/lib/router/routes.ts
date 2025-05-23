export const ROUTE_SEGMENT = {
  ID: ':id',
  // USERNAME: ':username',
  HOME: '',
  NEW: 'new',
  EDIT: 'edit',
} as const;

export const FEATURE_SEGMENT = {
  AUTH: {
    ROOT: 'auth',
    LOGIN: 'login',
    REGISTER: 'register',
    FORGOT_PASSWORD: 'forgot-password',
    RESET_PASSWORD: 'reset-password',
  },
  PROBLEMS: {
    ROOT: 'problems',
  },
  SOLVED: {
    ROOT: 'solved',
  },
  COMMUNITY: {
    ROOT: 'community',
  },
  USER: {
    ROOT: 'user',
  },
  RANKING: {
    ROOT: 'ranking',
  },
  SEARCH: {
    ROOT: 'search',
  },
  ABOUT: {
    ROOT: 'about',
  },
  FEATURES: {
    ROOT: 'features',
  },
  HELP: {
    ROOT: 'help',
  },
  FAQ: {
    ROOT: 'faq',
  },
  TERMS: {
    ROOT: 'terms',
  },
  PRIVACY: {
    ROOT: 'privacy',
  },
  COOKIES: {
    ROOT: 'cookies',
  },
  CONTACT: {
    ROOT: 'contact',
  },
  FORGOT_PASSWORD: {
    ROOT: 'forgot-password',
  },
  RESET_PASSWORD: {
    ROOT: 'reset-password',
  },
} as const;

export const ROUTES = {
  HOME: `/${ROUTE_SEGMENT.HOME}`,

  AUTH: {
    LOGIN: `/${FEATURE_SEGMENT.AUTH.ROOT}/${FEATURE_SEGMENT.AUTH.LOGIN}`,
    REGISTER: `/${FEATURE_SEGMENT.AUTH.ROOT}/${FEATURE_SEGMENT.AUTH.REGISTER}`,
    FORGOT_PASSWORD: `/${FEATURE_SEGMENT.AUTH.ROOT}/${FEATURE_SEGMENT.AUTH.FORGOT_PASSWORD}`,
    RESET_PASSWORD: `/${FEATURE_SEGMENT.AUTH.ROOT}/${FEATURE_SEGMENT.AUTH.RESET_PASSWORD}`,
  },

  PROBLEMS: {
    LIST: `/${FEATURE_SEGMENT.PROBLEMS.ROOT}`,
    DETAIL: `/${FEATURE_SEGMENT.PROBLEMS.ROOT}/${ROUTE_SEGMENT.ID}`,
    NEW: `/${FEATURE_SEGMENT.PROBLEMS.ROOT}/${ROUTE_SEGMENT.NEW}`,
    EDIT: `/${FEATURE_SEGMENT.PROBLEMS.ROOT}/${ROUTE_SEGMENT.ID}/${ROUTE_SEGMENT.EDIT}`,
  },

  SOLVED: `/${FEATURE_SEGMENT.SOLVED.ROOT}`,

  COMMUNITY: {
    LIST: `/${FEATURE_SEGMENT.COMMUNITY.ROOT}`,
    NEW: `/${FEATURE_SEGMENT.COMMUNITY.ROOT}/${ROUTE_SEGMENT.NEW}`,
    DETAIL: `/${FEATURE_SEGMENT.COMMUNITY.ROOT}/${ROUTE_SEGMENT.ID}`,
    EDIT: `/${FEATURE_SEGMENT.COMMUNITY.ROOT}/${ROUTE_SEGMENT.ID}/${ROUTE_SEGMENT.EDIT}`,
  },
  RANKING: `/${FEATURE_SEGMENT.RANKING.ROOT}`,
  USER: {
    PROFILE: `/${FEATURE_SEGMENT.USER.ROOT}/${ROUTE_SEGMENT.ID}`,
    SETTINGS: `/${FEATURE_SEGMENT.USER.ROOT}/${ROUTE_SEGMENT.ID}/${ROUTE_SEGMENT.EDIT}`,
  },
  SEARCH: `/${FEATURE_SEGMENT.SEARCH.ROOT}`,
  FEATURES: `/${FEATURE_SEGMENT.FEATURES.ROOT}`,
  HELP: `/${FEATURE_SEGMENT.HELP.ROOT}`,
  FAQ: {
    ROOT: `/${FEATURE_SEGMENT.HELP.ROOT}`,
    FAQ_DETAIL: `/${FEATURE_SEGMENT.HELP.ROOT}/${ROUTE_SEGMENT.ID}`,
  },
  TERMS: `/${FEATURE_SEGMENT.TERMS.ROOT}`,
  PRIVACY: `/${FEATURE_SEGMENT.PRIVACY.ROOT}`,
  COOKIES: `/${FEATURE_SEGMENT.COOKIES.ROOT}`,
  CONTACT: `/${FEATURE_SEGMENT.CONTACT.ROOT}`,
  FORGOT_PASSWORD: `/${FEATURE_SEGMENT.FORGOT_PASSWORD.ROOT}`,
  RESET_PASSWORD: `/${FEATURE_SEGMENT.RESET_PASSWORD.ROOT}`,
} as const;
