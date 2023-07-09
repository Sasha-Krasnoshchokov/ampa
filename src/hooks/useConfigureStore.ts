import { useCallback } from 'react';
import { useDispatch } from 'react-redux';

import { setClubs } from '../store/actions/clubsSlice';
import { setGames } from '../store/actions/gamesSlice';
import { setTeams } from '../store/actions/teamsSlice';
import { setReferees } from '../store/actions/refereesSlice';
import { setSalesLeads } from '../store/actions/salesLeadsSlice';
import { setDataUploadStatus } from '../store/actions/dataUploadStatusSlice';

import { fetchingData } from '../api/API';
import REQUEST_STATUSES from '../data/constants/requestStatuses';

const useConfigureStore = () => {
  const dispatch = useDispatch();

  const {
    getClubs,
    getGames,
    getTeams,
    getReferees,
    getSalesLeads,
  } = fetchingData();

  const configureSuperAdmin = useCallback(async (user: any) => {
    if (!user) return;
    const { organizations } = user;

    if (!organizations || organizations.length === 0) return;
    dispatch(setDataUploadStatus({ dataUploadStatus: REQUEST_STATUSES.PENDING }));

    const clubsPromise = getClubs(organizations);
    const gamesPromise = getGames(organizations);
    const teamsPromise = getTeams(organizations);
    const refereesPromise = getReferees();
    const salesLeadsPromise = getSalesLeads();

    const responses = await Promise.all([
      clubsPromise,
      gamesPromise,
      teamsPromise,
      refereesPromise,
      salesLeadsPromise,
    ]);
    dispatch(setClubs({ clubs: responses[0] }));
    dispatch(setGames({ games: responses[1] }));
    dispatch(setTeams({ teams: responses[2] }));
    dispatch(setReferees({ referees: responses[3] }));
    dispatch(setSalesLeads({ salesLeads: responses[4] }));

    dispatch(setDataUploadStatus({ dataUploadStatus: REQUEST_STATUSES.RESOLVED }));
  }, [dispatch, getGames, getClubs, getTeams, getReferees, getSalesLeads]);

  const configureOrganization = useCallback(async (user: any) => {
    if (!user) return;
    const { organizations } = user;

    if (!organizations || organizations.length === 0) return;

    const clubsPromise = getClubs(organizations);
    const gamesPromise = getGames(organizations);
    const teamsPromise = getTeams(organizations);

    const responses = await Promise.all([clubsPromise, gamesPromise, teamsPromise]);
    dispatch(setClubs({ clubs: responses[0] }));
    dispatch(setGames({ games: responses[1] }));
    dispatch(setTeams({ teams: responses[2] }));

    dispatch(setDataUploadStatus({ dataUploadStatus: 'resolved' }));
  }, [dispatch, getGames, getClubs, getTeams]);

  return {
    configureSuperAdmin,
    configureOrganization,
  };
};

export default useConfigureStore;
