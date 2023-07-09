interface FAQ {
  [key: string]: string,
}

type FaqList = FAQ[];

const faqList: FaqList = [
  {
    id: '1',
    question: 'How many teams can we have?',
    answer: 'Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure dolor',
  },
  {
    id: '2',
    question: 'When do we pay for games?',
    answer: 'Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure dolor',
  },
  {
    id: '3',
    question: 'What if we don\'t have a ref for a game?',
    answer: 'Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure dolor',
  },
  {
    id: '4',
    question: 'How do I communicate with the referring Crew?',
    answer: 'Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure dolor',
  },
  {
    id: '5',
    question: 'Can we decide what referees are assigned to our games?',
    answer: 'Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure dolor',
  },
  {
    id: '6',
    question: 'Should we try to keep our games at the same fields and stacked?',
    answer: 'Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure dolor',
  },
];

export default faqList;
