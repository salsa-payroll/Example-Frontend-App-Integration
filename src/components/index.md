---
title: Business Components
sidemenu: false
---

> This function is provided by [dumi](https://d.umijs.org/zh-CN/guide/advanced#umi-%E9%A1%B9%E7%9B%AE%E9%9B%86%E6%88 %90%E6%A8%A1%E5%BC%8F), dumi is a 📖 documentation tool for component development scenarios, and everyone who has used it says it is good.

# business components

All the components used in Pro are listed here. These components are not suitable as component libraries, but are really needed in business. So we have prepared this document to guide you whether you need to use this component.

## Footer Footer component

This component comes with some Pro configuration, you generally need to change its information.

```tsx
/**
 * background: '#f0f2f5'
 */
import React from 'react';
import Footer from '@/components/Footer';

export default () => <Footer />;
```

## HeaderDropdown header dropdown list

HeaderDropdown is the encapsulation of antd Dropdown, but adds special processing on the mobile side, and the usage is the same.

```tsx
/**
 * background: '#f0f2f5'
 */
import { Button, Menu } from 'antd';
import React from 'react';
import HeaderDropdown from '@/components/HeaderDropdown';

export default () => {
  const menuHeaderDropdown = (
    <Menu selectedKeys={[]}>
      <Menu.Item key="center">Personal Center</Menu.Item>
      <Menu.Item key="settings">Personal settings</Menu.Item>
      <Menu.Divider />
      <Menu.Item key="logout">Logout</Menu.Item>
    </Menu>
  );
  return (
    <HeaderDropdown overlay={menuHeaderDropdown}>
      <Button>hover show menu</Button>
    </HeaderDropdown>
  );
};
```

## HeaderSearch header search box

An input box with completed data, which supports collapsing and expanding Input

```tsx
/**
 * background: '#f0f2f5'
 */
import { Button, Menu } from 'antd';
import React from 'react';
import HeaderSearch from '@/components/HeaderSearch';

export default () => {
  return (
    <HeaderSearch
      placeholder="Search within the site"
      defaultValue="umi ui"
      options={[
        { label: 'Ant Design Pro', value: 'Ant Design Pro' },
        {
          label: 'Ant Design',
          value: 'Ant Design',
        },
        {
          label: 'Pro Table',
          value: 'Pro Table',
        },
        {
          label: 'Pro Layout',
          value: 'Pro Layout',
        },
      ]}
      onSearch={(value) => {
        console.log('input', value);
      }}
    />
  );
};
```

### API

| parameter | description | type | default value |
| --- | --- | --- | --- |
| value | The value of the input box | `string` | - |
| onChange | Triggered after the value is modified | `(value?: string) => void` | - |
| onSearch | Triggered after query | `(value?: string) => void` | - |
| options | list of options menu | `{label,value}[]` | - |
| defaultVisible | Whether the input box is displayed by default, only the first time it takes effect | `boolean` | - |
| visible | Whether the input box is displayed | `boolean` | - |
| onVisibleChange | Input box shows hidden callback function | `(visible: boolean) => void` | - |

## NoticeIcon notification tool

The Notification Tool provides an interface that displays various notification messages.

```tsx
/**
 * background: '#f0f2f5'
 */
import { message } from 'antd';
import React from 'react';
import NoticeIcon from '@/components/NoticeIcon/NoticeIcon';

export default () => {
  const list = [
    {
      id: '000000001',
      avatar: 'https://gw.alipayobjects.com/zos/rmsportal/ThXAXghbEsBCCSDihZxY.png',
      title: 'You received 14 new weekly newspapers',
      datetime: '2017-08-09',
      type: 'notification',
    },
    {
      id: '000000002',
      avatar: 'https://gw.alipayobjects.com/zos/rmsportal/OKJXDXrmkNshAMvwtvhu.png',
      title: 'Your recommended Qu Nini has passed the third round of interviews',
      datetime: '2017-08-08',
      type: 'notification',
    },
  ];
  return (
    <NoticeIcon
      count={10}
      onItemClick={(item) => {
        message.info(`${item.title} was clicked`);
      }}
      onClear={(title: string, key: string) => message.info('Clicked to clear more')}
      loading={false}
      clearText="clear"
      viewMoreText="View More"
      onViewMore={() => message.info('Clicked to view more')}
      clearClose
    >
      <NoticeIcon.Tab
        tabKey="notification"
        count={2}
        list={list}
        title="Notification"
        emptyText="You have viewed all notifications"
        showViewMore
      />
      <NoticeIcon.Tab
        tabKey="message"
        count={2}
        list={list}
        title="message"
        emptyText="You have read all messages"
        showViewMore
      />
      <NoticeIcon.Tab
        tabKey="event"
        title="To Do"
        emptyText="You have completed all to-dos"
        count={2}
        list={list}
        showViewMore
      />
    </NoticeIcon>
  );
};
```

### NoticeIcon API

| parameter | description | type | default value |
| --- | --- | --- | --- |
| count | how many unread notifications | `number` | - |
| bell | Graph of bells | `ReactNode` | - |
| onClear | Click the clear data button | `(tabName: string, tabKey: string) => void` | - |
| onItemClick | Unread message column is clicked | `(item: API.NoticeIconData, tabProps: NoticeIconTabProps) => void` | - |
| onViewMore | View more button clicks | `(tabProps: NoticeIconTabProps, e: MouseEvent) => void` | - |
| onTabChange | Notify tab switching | `(tabTile: string) => void;` | - |
| popupVisible | whether the notification is displayed | `boolean` | - |
| onPopupVisibleChange | Callback function for displaying hidden notification information | `(visible: boolean) => void` | - |
| clearText | clear button text | `string` | - |
| viewMoreText | View more button text | `string` | - |
| clearClose | Show clear button | `boolean` | - |
| emptyImage | The bottom line when the list is empty | `ReactNode` | - |

### NoticeIcon.Tab API

| parameter | description | type | default value |
| --- | --- | --- | --- |
| count | how many unread notifications | `number` | - |
| title | Title of notification tab | `ReactNode` | - |
| showClear | Show clear button | `boolean` | `true` |
| showViewMore | Show ViewMore | `boolean` | `true` |
| tabKey | Unique key for Tab | `string` | - |
| onClick | child's click event | `(item: API.NoticeIconData) => void` | - |
| onClear | Clear button click | `()=>void` | - |
| emptyText | test when it is empty | `()=>void` | - |
| viewMoreText | View more button text | `string` | - |
| onViewMore | View more button clicks | `( e: MouseEvent) => void` | - |
| list | list of notification information | `API.NoticeIconData` | - |

### NoticeIconData

```tsx | pure
export interface NoticeIconData {
  id: string;
  key: string;
  avatar: string;
  title: string;
  datetime: string;
  type: string;
  read?: boolean;
  description: string;
  clickClose?: boolean;
  extra: any;
  status: string;
}
```

## RightContent

RightContent is a combination of the above components, and the `SelectLang` plugin of plugins has been added.

```tsx | pure
<Space>
  <HeaderSearch
    placeholder="Search within the site"
    defaultValue="umi ui"
    options={[
      { label: <a href="https://umijs.org/zh/guide/umi-ui.html">umi ui</a>, value: 'umi ui' },
      {
        label: <a href="next.ant.design">Ant Design</a>,
        value: 'Ant Design',
      },
      {
        label: <a href="https://protable.ant.design/">Pro Table</a>,
        value: 'Pro Table',
      },
      {
        label: <a href="https://prolayout.ant.design/">Pro Layout</a>,
        value: 'Pro Layout',
      },
    ]}
  />
  <Tooltip title="Using Documentation">
    <span
      className={styles.action}
      onClick={() => {
        window.location.href = 'https://pro.ant.design/docs/getting-started';
      }}
    >
      <QuestionCircleOutlined />
    </span>
  </Tooltip>
  <Avatar />
  {REACT_APP_ENV && (
    <span>
      <Tag color={ENVTagColor[REACT_APP_ENV]}>{REACT_APP_ENV}</Tag>
    </span>
  )}
  <SelectLang className={styles.action} />
</Space>
```
