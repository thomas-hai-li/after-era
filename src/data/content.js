const imgBaseURL = '';
const content = [
  {
    title: 'Arthur',
    type: 'tv show',
    era: '90s',
    release: 1996,
    thumbnail: require('../img/arthur/thumbnail.jpg'),
    imgSrcs: [
      require('../img/arthur/1.png'),
      require('../img/arthur/2.gif'),
      require('../img/arthur/3.jpg'),
      require('../img/arthur/4.gif')
    ]
  },
  {
    title: 'Tamagotchi',
    type: 'toy',
    era: '90s',
    release: 1996,
    thumbnail: require('../img/tamagotchi/thumbnail.jpg'),
    imgSrcs: [
      require('../img/tamagotchi/1.jpg'),
      require('../img/tamagotchi/2.jpg'),
      require('../img/tamagotchi/3.png')
    ]
  },
  {
    title: 'Windows 98',
    type: 'software',
    era: '90s',
    release: 1998,
    thumbnail: require('../img/windows98/thumbnail.jpg'),
    imgSrcs: [
      require('../img/windows98/1.jpg'),
      require('../img/windows98/2.gif'),
      require('../img/windows98/3.gif')
    ]
  }
];

export default content;