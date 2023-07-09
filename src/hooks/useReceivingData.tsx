import API from '../api/API';

const useReceivingData = () => {
  const { getData } = API();

  const getAzureUser = async (azureId: string) => {
    const azureUserResponse = await getData({
      key: 'Users',
      payload: azureId,
      option: '',
    });
    return azureUserResponse;
  };

  const getClubs = async (organizations: any[]) => {
    const promises = organizations.map(((item) => (
      getData({
        key: 'Organizations',
        payload: item.id,
        option: '',
      })
    )));
    const responses = await Promise.all(promises);
    const clubs = responses.map((item) => item?.data);

    return clubs.reduce((prev, next) => {
      prev.push(next);
      return prev;
    }, []);
  };

  const getGames = async (organizations: any[]) => {
    const promises = organizations.map(((item) => (
      getData({
        key: 'Organizations',
        payload: item.id,
        option: 'schedules',
      })
    )));
    const responses = await Promise.all(promises);
    const games = responses.map((item) => item?.data);

    return games.reduce((prev, next) => {
      prev.push(...next.games);
      return prev;
    }, []);
  };

  const getTeams = async (organizations: any[]) => {
    const promises = organizations.map(((item) => (
      getData({
        key: 'Teams',
        payload: item.id,
        option: 'organization',
      })
    )));
    const responses = await Promise.all(promises);
    const teams = responses.map((item) => item?.data);

    return teams.reduce((prev, next) => {
      prev.push(...next);
      return prev;
    }, []);
  };

  return {
    getAzureUser,
    getClubs,
    getGames,
    getTeams,
  };
};

export default useReceivingData;
