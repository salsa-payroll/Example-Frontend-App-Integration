import { Card, Col, DatePicker, Row, Tabs } from 'antd';
import type { RangePickerProps } from 'antd/es/date-picker/generatePicker';
import type moment from 'moment';
import { Column } from '@ant-design/charts';

import numeral from 'numeral';
import type { DataItem } from '../data.d';
import styles from '../style.less';

type RangePickerValue = RangePickerProps<moment.Moment>['value'];
export type TimeType = 'today' | 'week' | 'month' | 'year';

const { RangePicker } = DatePicker;
const { TabPane } = Tabs;

const rankingListData: { title: string; total: number }[] = [];
for (let i = 0; i < 7; i += 1) {
  const min = i * 10;
  const max = (i + 1) * 10 - 1;
  rankingListData.push({
    title: `Super Shop ${Math.floor(min + Math.random() * (max - min + 1))} `,
    total: 323234 - (323234 * i * i) / 100,
  });
}

const SalesCard = ({
  rangePickerValue,
  salesData,
  isActive,
  handleRangePickerChange,
  loading,
  selectDate,
}: {
  rangePickerValue: RangePickerValue;
  isActive: (key: TimeType) => string;
  salesData: DataItem[];
  loading: boolean;
  handleRangePickerChange: (dates: RangePickerValue, dateStrings: [string, string]) => void;
  selectDate: (key: TimeType) => void;
}) => (
  <Card loading={loading} bordered={false} bodyStyle={{ padding: 0 }}>
    <div className={styles.salesCard}>
      <Tabs
        tabBarExtraContent={
          <div className={styles.salesExtraWrap}>
            <div className={styles.salesExtra}>
              <a className={isActive('today')} onClick={() => selectDate('today')}>
                Today
              </a>
              <a className={isActive('week')} onClick={() => selectDate('week')}>
                This week
              </a>
              <a className={isActive('month')} onClick={() => selectDate('month')}>
                This month
              </a>
              <a className={isActive('year')} onClick={() => selectDate('year')}>
                This year
              </a>
            </div>
            <RangePicker
              value={rangePickerValue}
              onChange={handleRangePickerChange}
              style={{ width: 256 }}
            />
          </div>
        }
        size="large"
        tabBarStyle={{ marginBottom: 24 }}
      >
        <TabPane tab="Sales" key="sales">
          <Row>
            <Col xl={16} lg={12} md={12} sm={24} xs={24}>
              <div className={styles.salesBar}>
                <Column
                  height={300}
                  forceFit
                  data={salesData as any}
                  xField="x"
                  yField="y"
                  xAxis={{
                    visible: true,
                    title: {
                      visible: false,
                    },
                  }}
                  yAxis={{
                    visible: true,
                    title: {
                      visible: false,
                    },
                  }}
                  title={{
                    visible: true,
                    text: 'Sales Trend',
                    style: {
                      fontSize: 14,
                    },
                  }}
                  meta={{
                    y: {
                      alias: 'Sales',
                    },
                  }}
                />
              </div>
            </Col>
            <Col xl={8} lg={12} md={12} sm={24} xs={24}>
              <div className={styles.salesRank}>
                <h4 className={styles.rankingTitle}>Store Sales Ranking</h4>
                <ul className={styles.rankingList}>
                  {rankingListData.map((item, i) => (
                    <li key={item.title}>
                      <span className={`${styles.rankingItemNumber} ${i < 3 ? styles.active : ''}`}>
                        {i + 1}
                      </span>
                      <span className={styles.rankingItemTitle} title={item.title}>
                        {item.title}
                      </span>
                      <span className={styles.rankingItemValue}>
                        {numeral(item.total).format('0,0')}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </Col>
          </Row>
        </TabPane>
        <TabPane tab="Views" key="views">
          <Row>
            <Col xl={16} lg={12} md={12} sm={24} xs={24}>
              <div className={styles.salesBar}>
                <Column
                  height={300}
                  forceFit
                  data={salesData as any}
                  xField="x"
                  yField="y"
                  xAxis={{
                    visible: true,
                    title: {
                      visible: false,
                    },
                  }}
                  yAxis={{
                    visible: true,
                    title: {
                      visible: false,
                    },
                  }}
                  title={{
                    visible: true,
                    text: 'Trend of visits',
                    style: {
                      fontSize: 14,
                    },
                  }}
                  meta={{
                    y: {
                      alias: 'Visits',
                    },
                  }}
                />
              </div>
            </Col>
            <Col xl={8} lg={12} md={12} sm={24} xs={24}>
              <div className={styles.salesRank}>
                <h4 className={styles.rankingTitle}>Store Visit Ranking</h4>
                <ul className={styles.rankingList}>
                  {rankingListData.map((item, i) => (
                    <li key={item.title}>
                      <span className={`${styles.rankingItemNumber} ${i < 3 ? styles.active : ''}`}>
                        {i + 1}
                      </span>
                      <span className={styles.rankingItemTitle} title={item.title}>
                        {item.title}
                      </span>
                      <span>{numeral(item.total).format('0,0')}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Col>
          </Row>
        </TabPane>
      </Tabs>
    </div>
  </Card>
);

export default SalesCard;
