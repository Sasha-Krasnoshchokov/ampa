import DASHBOARDS, { DASHBOARD_SUB_MENU } from '../constants/dashboards';
import { APP_ROLES } from '../constants/roles';

import MENU_CONFIG, { SUB_MENU_CONFIG } from './SideBarMenuConfig';

export type AccountConfig = {
  id: string;
  title: string;
  configs: {
    topBar: {
      buttons: string[];
      menuList: string[];
    },
    sideBar: {
      menuList: string[];
      subMenuList: string[];
    },
  } | null;
};

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

const accountsConfig = [
  {
    id: APP_ROLES.SUPER_ADMIN,
    title: 'Super Admin',
    configs: {
      sideBar: {
        menuList: [
          {
            ...MENU_CONFIG[DASHBOARD],
            subMenu: null,
          },
          {
            ...MENU_CONFIG[SALES_LEADS],
            subMenu: null,
          },
          {
            ...MENU_CONFIG[TOURNAMENTS],
            subMenu: [
              { ...SUB_MENU_CONFIG[CHILDREN] },
              { ...SUB_MENU_CONFIG[TEENAGE] },
              { ...SUB_MENU_CONFIG[ADULTS] },
            ],
          },
          {
            ...MENU_CONFIG[LEAGUES],
            subMenu: null,
          },
          {
            ...MENU_CONFIG[CLUBS],
            subMenu: null,
          },
          {
            ...MENU_CONFIG[TEAMS],
            subMenu: null,
          },
          {
            ...MENU_CONFIG[GAMES],
            subMenu: [
              { ...SUB_MENU_CONFIG[NEW_GAMES] },
              { ...SUB_MENU_CONFIG[COMPLETED_GAMES] },
              { ...SUB_MENU_CONFIG[CANCELED_GAMES] },
            ],
          },
          {
            ...MENU_CONFIG[REFEREES],
            subMenu: null,
          },
          {
            ...MENU_CONFIG[SETTINGS],
            subMenu: [
              { ...SUB_MENU_CONFIG[PRICES] },
              { ...SUB_MENU_CONFIG[PROFILE] },
            ],
          },
        ],
      },
    },
  },
  {
    id: APP_ROLES.ORGANIZATION,
    title: 'Organization',
    configs: {
      sideBar: {
        menuList: [
          {
            ...MENU_CONFIG[DASHBOARD],
            subMenu: null,
          },
          // {
          //   ...MENU_CONFIG[TOURNAMENTS],
          //   subMenu: [
          //     { ...SUB_MENU_CONFIG[CHILDREN] },
          //     { ...SUB_MENU_CONFIG[TEENAGE] },
          //     { ...SUB_MENU_CONFIG[ADULTS] },
          //   ],
          // },
          // {
          //   ...MENU_CONFIG[LEAGUES],
          //   subMenu: null,
          // },
          // {
          //   ...MENU_CONFIG[CLUBS],
          //   subMenu: null,
          // },
          {
            ...MENU_CONFIG[STAFF],
            subMenu: null,
          },
          {
            ...MENU_CONFIG[TEAMS],
            subMenu: null,
          },
          {
            ...MENU_CONFIG[GAMES],
            subMenu: [
              { ...SUB_MENU_CONFIG[NEW_GAMES] },
              { ...SUB_MENU_CONFIG[COMPLETED_GAMES] },
              { ...SUB_MENU_CONFIG[CANCELED_GAMES] },
            ],
          },
          {
            ...MENU_CONFIG[SETTINGS],
            subMenu: [
              { ...SUB_MENU_CONFIG[FINANCE] },
              { ...SUB_MENU_CONFIG[PRICES] },
              { ...SUB_MENU_CONFIG[PROFILE] },
              { ...SUB_MENU_CONFIG[SUPPORT] },
            ],
          },
        ],
      },
    },
  },
  {
    id: APP_ROLES.REFEREE,
    title: 'Referee',
    configs: {
      sideBar: {
        menuList: [
          {
            ...MENU_CONFIG[DASHBOARD],
            subMenu: null,
          },
          {
            ...MENU_CONFIG[TOURNAMENTS],
            subMenu: [
              { ...SUB_MENU_CONFIG[CHILDREN] },
              { ...SUB_MENU_CONFIG[TEENAGE] },
              { ...SUB_MENU_CONFIG[ADULTS] },
            ],
          },
          {
            ...MENU_CONFIG[LEAGUES],
            subMenu: null,
          },
          {
            ...MENU_CONFIG[GAMES],
            subMenu: [
              { ...SUB_MENU_CONFIG[NEW_GAMES] },
              { ...SUB_MENU_CONFIG[COMPLETED_GAMES] },
              { ...SUB_MENU_CONFIG[CANCELED_GAMES] },
            ],
          },
          {
            ...MENU_CONFIG[REFEREES],
            subMenu: null,
          },
          {
            ...MENU_CONFIG[SETTINGS],
            subMenu: [
              { ...SUB_MENU_CONFIG[FINANCE] },
              { ...SUB_MENU_CONFIG[PROFILE] },
              { ...SUB_MENU_CONFIG[SUPPORT] },
            ],
          },
        ],
      },
    },
  },
  {
    id: 'teamManager',
    title: 'Team Manager',
    configs: {
      sideBar: {
        menuList: [
          {
            ...MENU_CONFIG[DASHBOARD],
            subMenu: null,
          },
          {
            ...MENU_CONFIG[TOURNAMENTS],
            subMenu: [
              { ...SUB_MENU_CONFIG[CHILDREN] },
              { ...SUB_MENU_CONFIG[TEENAGE] },
              { ...SUB_MENU_CONFIG[ADULTS] },
            ],
          },
          {
            ...MENU_CONFIG[LEAGUES],
            subMenu: null,
          },
          {
            ...MENU_CONFIG[TEAMS],
            subMenu: null,
          },
          {
            ...MENU_CONFIG[GAMES],
            subMenu: [
              { ...SUB_MENU_CONFIG[NEW_GAMES] },
              { ...SUB_MENU_CONFIG[COMPLETED_GAMES] },
              { ...SUB_MENU_CONFIG[CANCELED_GAMES] },
            ],
          },
          {
            ...MENU_CONFIG[REFEREES],
            subMenu: null,
          },
          {
            ...MENU_CONFIG[SETTINGS],
            subMenu: [
              { ...SUB_MENU_CONFIG[FINANCE] },
              { ...SUB_MENU_CONFIG[PRICES] },
              { ...SUB_MENU_CONFIG[PROFILE] },
              { ...SUB_MENU_CONFIG[SUPPORT] },
            ],
          },
        ],
      },
    },
  },
  {
    id: 'coach',
    title: 'Coach',
    configs: {
      sideBar: {
        menuList: [
          {
            ...MENU_CONFIG[DASHBOARD],
            subMenu: null,
          },
          {
            ...MENU_CONFIG[TOURNAMENTS],
            subMenu: [
              { ...SUB_MENU_CONFIG[CHILDREN] },
              { ...SUB_MENU_CONFIG[TEENAGE] },
              { ...SUB_MENU_CONFIG[ADULTS] },
            ],
          },
          {
            ...MENU_CONFIG[LEAGUES],
            subMenu: null,
          },
          {
            ...MENU_CONFIG[TEAMS],
            subMenu: null,
          },
          {
            ...MENU_CONFIG[GAMES],
            subMenu: [
              { ...SUB_MENU_CONFIG[NEW_GAMES] },
              { ...SUB_MENU_CONFIG[COMPLETED_GAMES] },
              { ...SUB_MENU_CONFIG[CANCELED_GAMES] },
            ],
          },
          {
            ...MENU_CONFIG[REFEREES],
            subMenu: null,
          },
          {
            ...MENU_CONFIG[SETTINGS],
            subMenu: [
              { ...SUB_MENU_CONFIG[PROFILE] },
              { ...SUB_MENU_CONFIG[SUPPORT] },
            ],
          },
        ],
      },
    },
  },
  {
    id: 'player',
    title: 'Player',
    configs: {
      sideBar: {
        menuList: [
          {
            ...MENU_CONFIG[DASHBOARD],
            subMenu: null,
          },
          {
            ...MENU_CONFIG[TOURNAMENTS],
            subMenu: [
              { ...SUB_MENU_CONFIG[CHILDREN] },
              { ...SUB_MENU_CONFIG[TEENAGE] },
              { ...SUB_MENU_CONFIG[ADULTS] },
            ],
          },
          {
            ...MENU_CONFIG[LEAGUES],
            subMenu: null,
          },
          {
            ...MENU_CONFIG[GAMES],
            subMenu: [
              { ...SUB_MENU_CONFIG[NEW_GAMES] },
              { ...SUB_MENU_CONFIG[COMPLETED_GAMES] },
              { ...SUB_MENU_CONFIG[CANCELED_GAMES] },
            ],
          },
          {
            ...MENU_CONFIG[SETTINGS],
            subMenu: [
              { ...SUB_MENU_CONFIG[SUPPORT] },
            ],
          },
        ],
      },
    },
  },
  {
    id: 'competitionManager',
    title: 'Competition Manager',
    configs: null,
  },
];

export default accountsConfig;
