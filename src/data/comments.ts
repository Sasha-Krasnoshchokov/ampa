const user1 = require("../assets/icon_png/user1.png") as string;
const user2 = require("../assets/icon_png/user2.png") as string;
const user3 = require("../assets/icon_png/user3.png") as string;

const comments: any = [
  {
    id: '1',
    comment: '“You made it so simple. I just create account, find match near me, managed game. Thanks!”',
    user: {
      image: user1,
      name: 'Deen Mahoney',
      role: 'Center referee',
    },
  },
  {
    id: '2',
    comment: '"It\'s all good. I like CenteRef more and more each day, never know that I can manage my favorite team.'
      + 'CenteRef is worth much more than I paid."',
    user: {
      image: user2,
      name: 'Mike Warren',
      role: 'Referee assistant',
    },
  },
  {
    id: '3',
    comment: '"Simple. Helpful. Thanks."',
    user: {
      image: user3,
      name: 'Mike Mahoney',
      role: 'Referee assistant',
    },
  },
];

export default comments;
