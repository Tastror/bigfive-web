const choices = {
  plus: [
    {
      text: 'Täiesti ebatäpne',
      score: 1,
      color: 1
    },
    {
      text: 'Pigem ebatäpne',
      score: 2,
      color: 2
    },
    {
      text: 'Ei täpne ega ebatäpne',
      score: 3,
      color: 3
    },
    {
      text: 'Pigem täpne',
      score: 4,
      color: 4
    },
    {
      text: 'Täiesti täpne',
      score: 5,
      color: 5
    }
  ],
  minus: [
    {
      text: 'Täiesti ebatäpne',
      score: 5,
      color: 1
    },
    {
      text: 'Pigem ebatäpne',
      score: 4,
      color: 2
    },
    {
      text: 'Ei täpne ega ebatäpne',
      score: 3,
      color: 3
    },
    {
      text: 'Pigem täpne',
      score: 2,
      color: 4
    },
    {
      text: 'Täiesti täpne',
      score: 1,
      color: 5
    }
  ]
}

export default choices
