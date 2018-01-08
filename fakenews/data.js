Highcharts.setOptions({
  lang: {
    thousandsSep: ','
  },
});
Highcharts.chart('tweet_timeline', {
  title: {
    text: '#fakenews trend from Dec 9 to Dec 14 2017',
  },

  credits: {
    text: 'Lee Long Hui',
    href: 'https://twitter.com/leelonghui',
  },

  xAxis: {
    type: 'datetime',
    title: {
      text: 'Date & Time (UTC)',
    },
    gridLineWidth: 0,
  },

  yAxis: {
    title: {
      text: null,
    },
  },

  series: [{
    type: 'area',
    labels: {
      enabled: false,
    },
    name: 'Tweets',
    color: '#008837',
    fillOpacity: 0.1,
    data: [15400, 18584, 17327, 15954, 14245, {
        y: 26225,
        id: 'annotationA',
      }, {
        y: 35855,
        id: 'annotationB',
      }, 29148, 24012, 23636, 20948, 19229, 15649, 11387, 8751, 7223, 6511, 6682, 8628, 12399, {
        y: 22975,
        id: 'annotationC',
      }, 25285, 24241, 23040, 20870, 17903, 15935, 16388, {
        y: 24882,
        id: 'annotationD',
      }, 21472, 18286, 16749,
      14986, 13780, 13229, 9780, 7526, 6406, 5577, 4761, 4556, 5166, 6762, 9078, 13499, {
        y: 34429,
        id: 'annotationE',
      },
      31268, 24817, 22854, 20975, 22115, 23795, 21179, 19722, 20722, 20167, 19309, 28348, 21989, 15560, 11153, 8671, 6613, 5534, 5451, 6007,
      7610, {
        y: 22898,
        id: 'annotationF',
      },
      23292, 22643, 21155, 18747, 17129, 14872, 14047, 14486, 13356, 13129, 12157, 12263, 12120, 13529, 15082, 11676, 6762, 4609, 3624, 3159, 2920, 3549, 4540, 5247, {
        y: 22135,
        id: 'annotationG',
      },
      14851, 10268, 9550, 10030, 8783, 7992, 8885,
      9111, 9851, 11167, 10667, 8646,
    ],
    pointStart: Date.UTC(2010, 11, 9, 17),
    pointInterval: 3600 * 1000, // one hour
  }],

  annotations: [{
    labels: [{
      point: 'annotationA',
      text: 'Trump hits out WaPo.',
      backgroundColor: 'white'
    }, {
      point: 'annotationB',
      text: 'Trump hits out WaPo again.',
      backgroundColor: 'white'
    }, {
      point: 'annotationC',
      text: 'Trump criticises fake news on US economy.',
      backgroundColor: 'white'
    }, {
      point: 'annotationD',
      text: '"Fake news media is a stain on America."',
      backgroundColor: 'white'
    }, {
      point: 'annotationE',
      text: 'Trump slams NYT.',
      backgroundColor: 'white'
    }, {
      point: 'annotationF',
      text: 'Trump dismisses sexual harrassment allegation.',
      backgroundColor: 'white'
    }, {
      point: 'annotationG',
      text: 'Trump tweets about fake news',
      backgroundColor: 'white'
    }]
  }]
});
Highcharts.chart('tweet_histogram', {
  chart: {
    type: 'column',
  },
  title: {
    text: 'How frequent did people tweet about #fakenews within 103 hours?',
  },
  credits: {
    text: 'Lee Long Hui',
    href: 'https://twitter.com/leelonghui'
  },
  xAxis: {
    categories: ['<= 20', '<= 40', '<= 60']
  },
  yAxis: {
    min: 0,
    title: {
      text: null
    }
  },
  plotOptions: {
    column: {
      inside: true
    }
  },
  series: [{
    name: 'Number of users',
    color: '#008837',
    data: [547674, 6420, 1240]
  }]
});

Highcharts.chart('geo_pie', {
  chart: {
    type: 'pie'
  },
  title: {
    text: 'Percentage of tweets with geo-tagged enabled'
  },
  credits: {
    text: 'Lee Long Hui',
    href: 'https://twitter.com/leelonghui'
  },
  tooltip: {
    pointFormat: '{point.percentage:.2f}%'
  },
  plotOptions: {
    pie: {
      dataLabels: {
        enabled: true,
        format: '{point.name}<br>{point.percentage:.2f}%',
        distance: -30,
      }
    }
  },
  series: [{
    name: 'geo-tagged',
    colorByPoint: true,
    data: [{
      name: 'Enabled',
      y: 33.77,
      color: '#008837',
      sliced: true,
    }, {
      name: 'Disabled',
      y: 66.23,
      color: '#a6dba0',
    }]
  }]
});

Highcharts.chart('location_pie', {
  pie: {
    dataLabels: {
      enabled: true,
      distance: -30,
      style: {
        fontWeight: 'bold',
        color: 'white',
        font: 'sans-serif',
      }
    }
  },
  title: {
    text: 'Percentage of tweeters with location'
  },
  credits: {
    text: 'Lee Long Hui',
    href: 'https://twitter.com/leelonghui'
  },
  tooltip: {
    pointFormat: '{point.percentage:.2f}%'
  },
  plotOptions: {
    pie: {
      innerSize: 50,
      dataLabels: {
        enabled: true,
        format: '{point.name}<br>{point.percentage:.2f}%',
        distance: -30,
      }
    }
  },
  series: [{
    type: 'pie',
    name: 'Tweets with location',
    colorByPoint: true,
    data: [{
      name: 'With',
      y: 34.29,
      color: '#008837',
      sliced: true,
    }, {
      name: 'Without',
      y: 65.71,
      color: '#a6dba0',
    }]
  }]
});

Highcharts.chart('retweet_pie', {
  chart: {
    type: 'pie'
  },
  title: {
    text: 'Percentage of original, quoted and retweeted tweets'
  },
  credits: {
    text: 'Lee Long Hui',
    href: 'https://twitter.com/leelonghui'
  },
  tooltip: {
    pointFormat: '{point.percentage:.2f}%'
  },
  plotOptions: {
    pie: {
      // allowPointSelect: true,
      // cursor: 'pointer',
      dataLabels: {
        enabled: true,
        format: '{point.name}<br>{point.percentage:.2f}%',
        distance: -45,
      }
    }
  },
  series: [{
    name: 'Tweets',
    colorByPoint: true,
    data: [{
      name: 'Retweeted tweets',
      color: '#008837',
      y: 74.88
    }, {
      name: 'Original tweets',
      color: '#a6dba0',
      y: 16.52
    }, {
      name: 'Quoted tweets',
      y: 8.60,
      dataLabels: {
        distance: 30
      }
    }]
  }]
});



Highcharts.chart('tweetcloud', {
  title: {
    text: '"trump" is the centre of #fakenews Word Cloud'
  },
  credits: {
    text: 'Lee Long Hui',
    href: 'https://twitter.com/leelonghui'
  },
  series: [{
    type: 'wordcloud',
    cropThreshold: 100,
    data: [{
        "name": "trump",
        "weight": 22
      },
      {
        "name": "cnn",
        "weight": 13
      },
      {
        "name": "media",
        "weight": 9
      },
      {
        "name": "story",
        "weight": 8
      },
      {
        "name": "moore",
        "weight": 8
      },
      {
        "name": "journalists",
        "weight": 7
      },
      {
        "name": "roy",
        "weight": 7
      },
      {
        "name": "FALSE",
        "weight": 6
      },
      {
        "name": "people",
        "weight": 6
      },
      {
        "name": "sexual",
        "weight": 6
      },
      {
        "name": "just",
        "weight": 6
      },
      {
        "name": "watch",
        "weight": 6
      },
      {
        "name": "make",
        "weight": 6
      },
      {
        "name": "never",
        "weight": 6
      },
      {
        "name": "time",
        "weight": 5
      },
      {
        "name": "president",
        "weight": 5
      },
      {
        "name": "one",
        "weight": 5
      },
      {
        "name": "does",
        "weight": 5
      },
      {
        "name": "tell",
        "weight": 5
      },
      {
        "name": "reporting",
        "weight": 5
      },
      {
        "name": "press",
        "weight": 5
      },
      {
        "name": "care",
        "weight": 4
      },
      {
        "name": "much",
        "weight": 4
      },
      {
        "name": "wrong",
        "weight": 4
      },
      {
        "name": "stories",
        "weight": 4
      },
      {
        "name": "house",
        "weight": 4
      },
      {
        "name": "women",
        "weight": 4
      },
      {
        "name": "name",
        "weight": 4
      },
      {
        "name": "attorneys",
        "weight": 4
      },
      {
        "name": "truth",
        "weight": 4
      },
      {
        "name": "being",
        "weight": 4
      },
      {
        "name": "#maga",
        "weight": 4
      },
      {
        "name": "fired",
        "weight": 4
      },
      {
        "name": "TRUE",
        "weight": 4
      },
      {
        "name": "admitted",
        "weight": 4
      },
      {
        "name": "know",
        "weight": 4
      },
      {
        "name": "acosta",
        "weight": 4
      },
      {
        "name": "get",
        "weight": 4
      },
      {
        "name": "wife",
        "weight": 4
      },
      {
        "name": "fire",
        "weight": 4
      },
      {
        "name": "think",
        "weight": 4
      },
      {
        "name": "report",
        "weight": 4
      },
      {
        "name": "calls",
        "weight": 4
      },
      {
        "name": "jew",
        "weight": 3
      },
      {
        "name": "take",
        "weight": 3
      },
      {
        "name": "hours",
        "weight": 3
      },
      {
        "name": "reporter",
        "weight": 3
      },
      {
        "name": "day",
        "weight": 3
      },
      {
        "name": "job",
        "weight": 3
      },
      {
        "name": "free",
        "weight": 3
      },
      {
        "name": "mueller",
        "weight": 3
      },
      {
        "name": "it’s",
        "weight": 3
      },
      {
        "name": "said",
        "weight": 3
      },
      {
        "name": "part",
        "weight": 3
      },
      {
        "name": "good",
        "weight": 3
      },
      {
        "name": "trusted",
        "weight": 3
      },
      {
        "name": "see",
        "weight": 3
      },
      {
        "name": "accusations",
        "weight": 3
      },
      {
        "name": "kayla",
        "weight": 3
      },
      {
        "name": "sanders",
        "weight": 3
      },
      {
        "name": "american",
        "weight": 3
      },
      {
        "name": "lied",
        "weight": 3
      },
      {
        "name": "facebook",
        "weight": 3
      },
      {
        "name": "week",
        "weight": 3
      },
      {
        "name": "las",
        "weight": 3
      },
      {
        "name": "yesterday",
        "weight": 3
      },
      {
        "name": "around",
        "weight": 3
      },
      {
        "name": "claimed",
        "weight": 3
      },
      {
        "name": "scan",
        "weight": 3
      },
      {
        "name": "rally",
        "weight": 3
      },
      {
        "name": "times",
        "weight": 3
      },
      {
        "name": "donald",
        "weight": 3
      },
      {
        "name": "definitely",
        "weight": 3
      },
      {
        "name": "right",
        "weight": 3
      },
      {
        "name": "jews",
        "weight": 3
      },
      {
        "name": "photo",
        "weight": 3
      },
      {
        "name": "abc",
        "weight": 3
      },
      {
        "name": "man",
        "weight": 3
      },
      {
        "name": "called",
        "weight": 3
      },
      {
        "name": "says",
        "weight": 3
      },
      {
        "name": "responsible",
        "weight": 3
      },
      {
        "name": "wh",
        "weight": 3
      },
      {
        "name": "sarah",
        "weight": 3
      },
      {
        "name": "misconduct",
        "weight": 3
      },
      {
        "name": "arena",
        "weight": 3
      },
      {
        "name": "harassment",
        "weight": 3
      },
      {
        "name": "read",
        "weight": 3
      },
      {
        "name": "tv",
        "weight": 3
      },
      {
        "name": "opinion",
        "weight": 3
      },
      {
        "name": "white",
        "weight": 3
      },
      {
        "name": "two",
        "weight": 3
      },
      {
        "name": "way",
        "weight": 3
      },
      {
        "name": "outlets",
        "weight": 3
      }
    ],
    name: 'Occurrences'
  }]
})
