const choices = {
  plus: [
    {
      text: 'بالکل غلط',
      score: 1,
      color: 1
    },
    {
      text: 'کسی حد تک غلط',
      score: 2,
      color: 2
    },
    {
      text: 'نہ درست نہ غلط',
      score: 3,
      color: 3
    },
    {
      text: 'کسی حد تک درست',
      score: 4,
      color: 4
    },
    {
      text: 'بالکل درست',
      score: 5,
      color: 5
    }
  ],
  minus: [
    {
      text: 'بالکل غلط',
      score: 5,
      color: 1
    },
    {
      text: 'کسی حد تک غلط',
      score: 4,
      color: 2
    },
    {
      text: 'نہ درست نہ غلط',
      score: 3,
      color: 3
    },
    {
      text: 'کسی حد تک درست',
      score: 2,
      color: 4
    },
    {
      text: 'بالکل درست',
      score: 1,
      color: 5
    }
  ]
}

export default choices
