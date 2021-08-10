import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

const task = process.env.npm_lifecycle_event;

const config = {
  mode: 'development',

  module: {
    rules: [
      // React and JavaScript
      {
        test: /\.jsx?$/i,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              ['@babel/preset-react', { runtime: 'automatic' }],
            ],
          },
        },
      },

      // CSS and SASS
      {
        test: /\.s?a?c?ss/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },

      // Images
      {
        test: /\.(png|svg|jpe?g|mp4)$/i,
        type: 'asset',
      },
    ],
  },

  plugins: [new HtmlWebpackPlugin({ template: 'public/index.html' })],

  resolve: {
    extensions: ['.js', '.jsx'],
  },

  devServer: {
    port: 3000,
    open: {
      app: {
        name: 'Google Chrome',
      },
    },
    client: {
      logging: 'error',
    },
  },
};

if (task === 'start') config.devtool = 'source-map';

if (task === 'build') {
  config.mode = 'production';

  (config.output = {
    clean: true,
    filename: 'assets/js/[name].bundle.[fullhash].js',
    assetModuleFilename: 'assets/images/[hash][ext][query]',
  }),
    (config.module.rules[1].use[0] = MiniCssExtractPlugin.loader);

  config.module.rules[1].use[2] = {
    loader: 'postcss-loader',
    options: {
      postcssOptions: {
        plugins: ['postcss-preset-env'],
      },
    },
  };

  config.module.rules[1].use[3] = 'sass-loader';

  config.plugins = [
    ...config.plugins,
    new MiniCssExtractPlugin({ filename: 'assets/css/[name].styles.[fullhash].css' }),
  ];
}

export default config;
