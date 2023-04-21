// src/mocks/handlers.js
import { rest } from 'msw';
import listTableListMock from '../../mock/listTableList';
import noticesMock from '../../mock/notices';
import routeMock from '../../mock/route';
import userMock from '../../mock/user';
import analysisMock from '../pages/dashboard/analysis/_mock';

class ExpressResponseMock {
  constructor(jsonObj = null, statusCode = null) {
    this.jsonObj = jsonObj;
    this.statusCode = statusCode;
  }
  getStatusCode() {
    return this.statusCode;
  }
  status(val) {
    this.statusCode = val;
    return this;
  }
  getJsonObj() {
    return this.jsonObj;
  }
  json(obj) {
    this.jsonObj = obj;
  }
  send = this.json;
  clone() {
    return new ExpressResponseMock(this.jsonObj, this.statusCode);
  }
}

const getUmiMockHandler = (umiMockFunc) => async (req, res, ctx) => {
  const reqMock = {
    ...req,
    query: Object.fromEntries(req.url.searchParams),
    url: req.url.toString(),
  };
  const resMock = new ExpressResponseMock();
  await umiMockFunc(reqMock, resMock);
  return res(ctx.status(resMock.getStatusCode() || 200), ctx.json(resMock.getJsonObj()));
};

export const handlers = [
  //     rest.get('/api/fake_analysis_chart_data', (req, res, ctx) => {
  //     // console.log(`MSW mock for analysis: ${JSON.stringify(mockedChartData)}`)
  //     // const response = res(
  //     //     ctx.status(200),
  //     //     ctx.json({data: mockedChartData}),
  //     // )
  //     // return response;
  //     // let jsonObj;
  //     // function setJson(obj) {
  //     //     jsonObj = obj;
  //     // }
  //     const resMock = new ExpressResponseMock();
  //     analysisMock.mockFunction({}, resMock);
  //     return res(
  //         ctx.status(resMock.getStatus() || 200),
  //         ctx.json(resMock.getJsonObj()),
  //     )
  //   }),
  rest.get(
    '/api/fake_analysis_chart_data',
    getUmiMockHandler(analysisMock['GET  /api/fake_analysis_chart_data']),
  ),
  rest.get('/api/rule', getUmiMockHandler(listTableListMock['GET /api/rule'])),
  rest.post('/api/rule', getUmiMockHandler(listTableListMock['POST /api/rule'])),
  rest.get('/api/notices', getUmiMockHandler(noticesMock['GET /api/notices'])),
  rest.all('/api/auth_routes', getUmiMockHandler(routeMock['/api/auth_routes'])),
  rest.get('/api/currentUser', getUmiMockHandler(userMock['GET /api/currentUser'])),
  rest.get('/api/users', getUmiMockHandler(userMock['GET /api/users'])),
  rest.post('/api/login/account', getUmiMockHandler(userMock['POST /api/login/account'])),
  rest.post('/api/login/outLogin', getUmiMockHandler(userMock['POST /api/login/outLogin'])),
  rest.post('/api/register', getUmiMockHandler(userMock['POST /api/register'])),
  rest.get('/api/401', getUmiMockHandler(userMock['GET /api/401'])),
  rest.get('/api/403', getUmiMockHandler(userMock['GET /api/403'])),
  rest.get('/api/404', getUmiMockHandler(userMock['GET /api/404'])),
  rest.get('/api/500', getUmiMockHandler(userMock['GET /api/500'])),
  rest.get('/api/login/captcha', getUmiMockHandler(userMock['GET  /api/login/captcha'])),
];
