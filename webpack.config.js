var path = require('path');
var webpack = require('webpack');
var envFile =require('node-env-file');

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

try{
  envFile(path.join(__dirname,'config/'+process.env.NODE_ENV + '.env'));
}catch(e){

}

module.exports= {
  entry: [
    'script-loader!jquery/dist/jquery.min.js',
    'script-loader!foundation-sites/dist/js/foundation.min.js',
    './src/js/main.js'
  ],
  externals:{
    jquery:'jQuery',

  },
  plugins:[
    new webpack.ProvidePlugin({
      '$':'jquery',
      'jQuery': 'jquery',

    }),
    new webpack.DefinePlugin({
      'process.env':{
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
        API_KEY: JSON.stringify(process.env.API_KEY),
        AUTH_DOMAIN: JSON.stringify(process.env.AUTH_DOMAIN),
        DATABASE_URL: JSON.stringify(process.env.DATABASE_URL),
        MESSAGING_SENDER_ID: JSON.stringify(process.env.MESSAGING_SENDER_ID),
        PROJECT_ID: JSON.stringify(process.env.PROJECT_ID),
        STORAGE_BUCKET: JSON.stringify(process.env.STORAGE_BUCKET),
        GITHUB_ACCESS_TOKEN: JSON.stringify(process.env.GITHUB_ACCESS_TOKEN)
      }
    })

  ],
  output: {
    path: __dirname,
    filename:  './app/js/main.js'
  },

  resolve:{
    modules:[
      'node_modules','./src/js/components','./src/js/api','./src/js/actions','./src/js/reducers',
    ],
    alias: {
      App: path.resolve(__dirname,'./src/js/components/App.jsx'),
      Components: path.resolve(__dirname,'./src/js/components'),
      app: path.resolve(__dirname,'./src/js/'),
      applicationStyles: path.resolve(__dirname,'./src/css/'),
      Store: path.resolve(__dirname, './src/js/store/configureStore.jsx')
    },
    extensions: ['.js','.jsx']
  },
  module: {

    loaders:[
      {
        test: /.jsx?/,
        loader: 'babel-loader',
        query: {
          presets: ['react','es2015','stage-0']
        },
        exclude: /(node_modules|bower_components)/
      },
      {
				test: /\.css$/,
				loader: ['style-loader', 'css-loader']
			},

      {
             test: /\.scss$/,
             use: [{
                 loader: "style-loader"
             }, {
                 loader: "css-loader"
             }, {
                 loader: "sass-loader",
                 options: {
                     includePaths: [path.resolve(__dirname,'./node_modules/foundation-sites/scss')]
                 }
             }]
         }
    ],

  },
  devtool: process.env.NODE_ENV  === 'production' ? undefined : 'cheap-module-eval-source-map'

};
