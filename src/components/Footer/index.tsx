import { GithubOutlined } from '@ant-design/icons';
import { DefaultFooter } from '@ant-design/pro-layout';
import { useIntl } from 'umi';

const Footer: React.FC = () => {
  const intl = useIntl();
  const defaultMessage = intl.formatMessage({
    id: 'app.copyright.produced',
  });

  const currentYear = new Date().getFullYear();

  return (
    <DefaultFooter
      copyright={`${currentYear} ${defaultMessage}`}
      links={[
        {
          key: 'Union Mate',
          title: 'Union Mate',
          href: '/',
          blankTarget: false,
        },
        {
          key: 'github',
          title: <GithubOutlined />,
          href: 'https://github.com/salsa-payroll',
          blankTarget: true,
        },
        {
          key: 'Example Frontend App',
          title: 'Example Frontend App',
          href: 'https://github.com/salsa-payroll/Example-Frontend-App-Integration',
          blankTarget: true,
        },
        {
          key: 'Ant Design Pro',
          title: 'Created with Ant Design Pro',
          href: 'https://pro.ant.design',
          blankTarget: true,
        },
      ]}
    />
  );
};

export default Footer;
