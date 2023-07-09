interface InfoItem {
  [key: string]: string,
}

interface InfoList {
  [key: string]: InfoItem[],
}

const whatForTeamsReferees: InfoList = {
  teams: [
    {
      icon: 'createTeam',
      title: 'Create team',
      text: 'Simple and quick create our team with detail info.',
    },
    {
      icon: 'ball',
      title: 'Add your game',
      text: 'Create and add new matches, add time and professional field.',
    },
    {
      icon: 'whistle',
      title: 'Hire best of referee',
      text: 'Find and hire best referee around and play success games.',
    },
  ],
  referees: [
    {
      icon: 'shield',
      title: 'Find your way',
      text: 'Work with the best soccer clubs and get games done.',
    },
    {
      icon: 'location',
      title: 'Ways to earn',
      text: 'Look for many referee opportunities around you.',
    },
    {
      icon: 'graph',
      title: 'Explore',
      text: 'Explore the kind of matches in your field.',
    },
  ],
};

export default whatForTeamsReferees;
