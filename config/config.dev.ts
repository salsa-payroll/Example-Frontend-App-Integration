// https://umijs.org/config/
import { defineConfig } from 'umi';

export default defineConfig({
  plugins: [
    // https://github.com/zthxxx/react-dev-inspector
    'react-dev-inspector/plugins/umi/react-inspector',
  ],
  // https://github.com/zthxxx/react-dev-inspector#inspector-loader-props
  inspectorConfig: {
    exclude: [],
    babelPlugins: [],
    babelOptions: {},
  },
  devServer: {
    https: {
      key: 'tls/key.pem',
      cert: 'tls/cert.pem',
    },
    host: 'local.app.com',
    allowedHosts: 'auto',
  },
});
