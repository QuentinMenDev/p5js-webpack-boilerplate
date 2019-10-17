# p5js-webpack-boilerplate

This project is a boilerplate of p5js integration with webpack. It is set so p5js is declared global (so no instanciation). This project comes with the addon `p5.sound`.
The canvas is set so it takes the full size of the screen with no margin/padding.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Requirements

You need **node.js**.

### Installing

Install the dependencies and you are done!

```
$ npm install
```
### Start coding!

To start using your creative side, just go in the sketch folder and start using the index.js file. It already contains the functions `preload()`, `setup()` and `draw()`.

#### How to add a p5js function?

You will need to export the specific function. For example, to be able to use the `mousePressed()` function, you will need to write in `index.js`:

```js
export function mousePressed() {
  // Your code here
}
```

## Development

Run the local webpack-dev-server with livereload and autocompile on http://localhost:8080/

```
$ npm run start
```

## Deployment

Build the application

```
$ npm run build
```

## Built With

* [Webpack](https://webpack.js.org) - The static module bundler for modern JavaScript applications
* [p5js](https://p5js.org) - A JavaScript library for creative coding

## Author

* **Quentin Mennecart** - *Initial work* - [Mortak](https://github.com/Mortak)

## License

This project is licensed under the MIT License.

