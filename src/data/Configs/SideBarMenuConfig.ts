import DASHBOARDS, { DASHBOARD_SUB_MENU } from '../constants/dashboards';

const {
  DASHBOARD,
  SALES_LEADS,
  TOURNAMENTS,
  LEAGUES,
  TEAMS,
  CLUBS,
  REFEREES,
  GAMES,
  SETTINGS,
  STAFF,
} = DASHBOARDS;

const {
  NEW_GAMES,
  CANCELED_GAMES,
  COMPLETED_GAMES,
  FINANCE,
  PRICES,
  PROFILE,
  SUPPORT,
  CHILDREN,
  TEENAGE,
  ADULTS,
} = DASHBOARD_SUB_MENU;

export type Menu = {
  id: string,
  title: string,
  href: string,
  icon: string,
};
type MenuConfig = {
  [key: string]: Menu;
};

export const SUB_MENU_CONFIG: MenuConfig = {
  [CHILDREN]: {
    id: CHILDREN,
    title: 'Children\'s',
    href: '/dashboard/tournaments/children\'s',
    icon: '',
  },
  [TEENAGE]: {
    id: TEENAGE,
    title: 'Teenage',
    href: '/dashboard/tournaments/teenage',
    icon: '',
  },
  [ADULTS]: {
    id: ADULTS,
    title: 'Adults',
    href: '/dashboard/tournaments/adults',
    icon: '',
  },
  [NEW_GAMES]: {
    id: NEW_GAMES,
    title: 'New Games',
    href: '/dashboard/games/new_games',
    icon: '',
  },
  [COMPLETED_GAMES]: {
    id: COMPLETED_GAMES,
    title: 'Completed Games',
    href: '/dashboard/games/completed_games',
    icon: '',
  },
  [CANCELED_GAMES]: {
    id: CANCELED_GAMES,
    title: 'Canceled Games',
    href: '/dashboard/games/canceled_games',
    icon: '',
  },
  [FINANCE]: {
    id: FINANCE,
    title: 'Finance',
    href: '/dashboard/settings/finance',
    icon: '',
  },
  [PRICES]: {
    id: PRICES,
    title: 'Price for games',
    href: '/dashboard/settings/prices',
    icon: '',
  },
  [PROFILE]: {
    id: PROFILE,
    title: 'Profile Settings',
    href: '/dashboard/settings/profile',
    icon: '',
  },
  [SUPPORT]: {
    id: SUPPORT,
    title: 'Support',
    href: '/dashboard/settings/support',
    icon: '',
  },
};

const MENU_CONFIG: MenuConfig = {
  [DASHBOARD]: {
    id: DASHBOARD,
    title: 'Dashboard',
    href: `/${DASHBOARD}`,
    icon: 'house',
  },
  [SALES_LEADS]: {
    id: SALES_LEADS,
    title: 'Sales leads',
    href: `/${DASHBOARD}/${SALES_LEADS}`,
    icon: 'users',
  },
  [TOURNAMENTS]: {
    id: TOURNAMENTS,
    title: 'Tournaments',
    href: `/${DASHBOARD}/${TOURNAMENTS}`,
    icon: 'cup',
  },
  [LEAGUES]: {
    id: LEAGUES,
    title: 'Leagues',
    href: `/${DASHBOARD}/${LEAGUES}`,
    icon: 'league',
  },
  [CLUBS]: {
    id: CLUBS,
    title: 'Clubs',
    href: `/${DASHBOARD}/${CLUBS}`,
    icon: 'users',
  },
  [TEAMS]: {
    id: TEAMS,
    title: 'Teams',
    href: `/${DASHBOARD}/${TEAMS}`,
    icon: 'users',
  },
  [GAMES]: {
    id: GAMES,
    title: 'Games',
    href: `/${DASHBOARD}/${GAMES}`,
    icon: 'ball',
  },
  [REFEREES]: {
    id: REFEREES,
    title: 'Referees',
    href: `/${DASHBOARD}/${REFEREES}`,
    icon: 'whistle',
  },
  [SETTINGS]: {
    id: SETTINGS,
    title: 'Settings',
    href: `/${DASHBOARD}/${SETTINGS}`,
    icon: 'settings',
  },
  [STAFF]: {
    id: STAFF,
    title: 'Staff',
    href: `/${DASHBOARD}/${STAFF}`,
    icon: 'user',
  },
};

export default MENU_CONFIG;
