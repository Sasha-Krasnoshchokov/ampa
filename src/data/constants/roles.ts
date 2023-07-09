/**
 * Used for an organization sign up form
 */
export const salesLeadRoles = [
  { key: 0, value: 'Owner' },
  { key: 1, value: 'Organization Director' },
  { key: 2, value: 'Organization Admin' },
  { key: 3, value: 'Organization Representative' },
];

export const APP_ROLES = {
  SUPER_ADMIN: 'superAdmin',
  ORGANIZATION: 'organization',
  REFEREE: 'referee',
  GUEST: 'guest',
};

export const clubRoles = {
  OWNER: 'owner',
  DIRECTOR: 'director',
  CLUB_ADMIN: 'club_admin',
  MANAGER: 'manager',
  COACH: 'coach',
  PLAYER: 'player',
  DOCTOR: 'doctor',
};

const ROLES = {
  ...clubRoles,
  ADMIN: 'admin',
  TOURNAMENT_MANAGER: 'tournament_manager',
  LEAGUE_MANAGER: 'league_manager',
  CLUB_MANAGER: 'club_manager',
  TEAM_MANAGER: 'team_manager',
  MAIN_REFEREE: 'main_referee',
  REFEREE: 'referee',
};

export default ROLES;
