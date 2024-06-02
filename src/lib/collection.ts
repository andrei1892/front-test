// [
//   {
//     id: 26166,
//     player: {
//       firstname: 'Karim',
//       lastname: 'Benzema',
//       birthday: '1987-12-19T08:38:50.090Z',
//       image:
//         'https://images.fotmob.com/image_resources/playerimages/26166.png',
//     },
//   },
// ]

export const fetchCollection = async function (url: string) {
  const response = await fetch(url);
  return response.json();
};
