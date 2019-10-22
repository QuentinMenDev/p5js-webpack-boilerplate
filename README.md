# p5js-webpack-boilerplate (p5js global mode)

This project is a boilerplate of p5js (in global mode) integration with webpack. It is set so p5js is declared global (so no instanciation). This project comes with the addon `p5.sound`.
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

You have multiple ways of doing it:

***Way 1 (intended one):***

1. Create a new .js file in the sketch/p5 folder. I recommend to name it as the name of the function.
2. Export the function from that new file with `export default`.
3. In `index.js`, import the function and add it to the list of exported functions.
4. Enjoy!

__Example:__

Let's use the function `mousePressed()`:

*in `mousePressed.js`*

```js
export default function mousePressed() {
  // Write your code here
}
```

*in `index.js`*

```js
// ...
import mousePressed from './mousePressed'

export {
  // ...
  mousePressed
}
```

***Way 2:***

You will need to export the specific function in `index.js`. 

Example: to be able to use the `mousePressed()` function:

*in index.js*

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

