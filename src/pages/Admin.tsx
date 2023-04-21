import React from 'react';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import { useIntl } from 'umi';

const Admin: React.FC = () => {
  const intl = useIntl();
  return (
    <PageHeaderWrapper
      content={intl.formatMessage({
        id: 'pages.admin.subPage.title',
        defaultMessage: 'This page can only be viewed by admin',
      })}
    />
  );
};

export default Admin;
