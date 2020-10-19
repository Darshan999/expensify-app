const path = require('path'); 

module.exports = {
 entry: './src/app.js', // Entry file of webpack
 output: {
     path: path.join(__dirname, 'public'), // Add directory path where you want to generate file.
     filename: 'bundle.js' // Add filename
 },
 // In module we can define rules i.e convert JS code using babel or convert SCSS to CSS.
 module: {
     rules: [{
         loader: 'babel-loader', // babel-loader which convert JS code
         test: /\.js$/, // All JS files needs to be converted through babel
         exclude: /node_modules/ // Except node_modules
     }, {
        test: /\.s?css$/,
        use: [
            'style-loader', // It takes that CSS that's in JavaScript and adds it to the DOM by injecting <style> tag
            'css-loader', // It allow webpack to load our css assets and convert into JS representation of that CSS
            'sass-loader' // Behind the scene it uses node-saas to convert the file into css
        ] 
     }]
 },
 // Helps to debug the error messages and development.
 devtool: 'cheap-module-eval-source-map',
 // devServer that speed up the process between changing application files and those changes reflected in 
 // browser. also It generates bundle file for us and it is serving it up from the memory which keeps 
 // development server super fast.
 devServer: {
     contentBase: path.join(__dirname, 'public'),
     // This tells the webserver that we are going to handle routing via our client side code that should 
     // return index.html page for all routes
     historyApiFallback: true
 }
}