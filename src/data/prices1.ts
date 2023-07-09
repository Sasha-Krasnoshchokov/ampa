interface Price {
  [key: string]: string | number,
}

type Prices = Price[];

const prices: Prices = [
  {
    title: 'Monthly',
    price: 50,
    total: '($600) per year',
  },
  {
    title: 'Annually',
    price: 450,
    total: '($37,5) per month',
  },
];

export default prices;
