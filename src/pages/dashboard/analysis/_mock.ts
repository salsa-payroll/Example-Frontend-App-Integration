import type { Request, Response } from 'express';
import moment from 'moment';
import type { AnalysisData, DataItem, RadarData } from './data.d';

// mock data
const visitData: DataItem[] = [];
const beginDay = new Date().getTime();

const fakeY = [7, 5, 4, 2, 4, 7, 5, 6, 5, 9, 6, 3, 1, 5, 3, 6, 5];
for (let i = 0; i < fakeY.length; i += 1) {
  visitData.push({
    x: moment(new Date(beginDay + 1000 * 60 * 60 * 24 * i)).format('YYYY-MM-DD'),
    y: fakeY[i],
  });
}

const visitData2 = [];
const fakeY2 = [1, 6, 4, 8, 3, 7, 2];
for (let i = 0; i < fakeY2.length; i += 1) {
  visitData2.push({
    x: moment(new Date(beginDay + 1000 * 60 * 60 * 24 * i)).format('YYYY-MM-DD'),
    y: fakeY2[i],
  });
}

const salesData = [];
for (let i = 0; i < 12; i += 1) {
  salesData.push({
    x: `${new Date(0, i).toLocaleString('en-US', { month: 'short' })}`,
    y: Math.floor(Math.random() * 1000) + 200,
  });
}
const searchData = [];
for (let i = 0; i < 50; i += 1) {
  searchData.push({
    index: i + 1,
    keyword: `search keyword-${i}`,
    count: Math.floor(Math.random() * 1000),
    range: Math.floor(Math.random() * 100),
    status: Math.floor((Math.random() * 10) % 2),
  });
}
const salesTypeData = [
  {
    x: 'Household Appliances',
    y: 4544,
  },
  {
    x: 'Eat drinks',
    y: 3321,
  },
  {
    x: 'personal care',
    y: 3113,
  },
  {
    x: 'Clothing bags',
    y: 2341,
  },
  {
    x: 'Mother and baby products',
    y: 1231,
  },
  {
    x: 'other',
    y: 1231,
  },
];

const salesTypeDataOnline = [
  {
    x: 'Household Appliances',
    y: 244,
  },
  {
    x: 'Eat drinks',
    y: 321,
  },
  {
    x: 'personal care',
    y: 311,
  },
  {
    x: 'Clothing bags',
    y: 41,
  },
  {
    x: 'Mother and baby products',
    y: 121,
  },
  {
    x: 'other',
    y: 111,
  },
];

const salesTypeDataOffline = [
  {
    x: 'Household Appliances',
    y: 99,
  },
  {
    x: 'Eat drinks',
    y: 188,
  },
  {
    x: 'personal care',
    y: 344,
  },
  {
    x: 'Clothing bags',
    y: 255,
  },
  {
    x: 'other',
    y: 65,
  },
];

const offlineData = [];
for (let i = 0; i < 10; i += 1) {
  offlineData.push({
    name: `Stores ${i}`,
    cvr: Math.ceil(Math.random() * 9) / 10,
  });
}
const offlineChartData = [];
for (let i = 0; i < 20; i += 1) {
  const date = moment(new Date().getTime() + 1000 * 60 * 30 * i).format('HH:mm');
  offlineChartData.push({
    date,
    type: 'passenger flow',
    value: Math.floor(Math.random() * 100) + 10,
  });
  offlineChartData.push({
    date,
    type: 'Number of payments',
    value: Math.floor(Math.random() * 100) + 10,
  });
}

const radarOriginData = [
  {
    name: 'person',
    ref: 10,
    koubei: 8,
    output: 4,
    contribute: 5,
    hot: 7,
  },
  {
    name: 'team',
    ref: 3,
    koubei: 9,
    output: 6,
    contribute: 3,
    hot: 1,
  },
  {
    name: 'department',
    ref: 4,
    koubei: 1,
    output: 6,
    contribute: 5,
    hot: 7,
  },
];

const radarData: RadarData[] = [];
const radarTitleMap = {
  ref: 'reference',
  koubei: 'word of mouth',
  output: 'yield',
  contribute: 'contribute',
  hot: 'hotness',
};
radarOriginData.forEach((item) => {
  Object.keys(item).forEach((key) => {
    if (key !== 'name') {
      radarData.push({
        name: item.name,
        label: radarTitleMap[key],
        value: item[key],
      });
    }
  });
});

const getFakeChartData: AnalysisData = {
  visitData,
  visitData2,
  salesData,
  searchData,
  offlineData,
  offlineChartData,
  salesTypeData,
  salesTypeDataOnline,
  salesTypeDataOffline,
  radarData,
};

const fakeChartData = (_: Request, res: Response) => {
  return res.json({
    data: getFakeChartData,
  });
};

export default {
  'GET  /api/fake_analysis_chart_data': fakeChartData,
  mockFunction: fakeChartData,
};

export const mockedChartData = getFakeChartData;
