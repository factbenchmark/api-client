# Example of how to connect to the FactBench API 


## Usage

If you don't have webpack installed globally do so by running `npm install webpack -g`. Then run `npm install` to install dependencies.

- `npm start` will start the live-reload dev server.
- `npm run build` will build the site for development use. By default site are output in the `dist/` folder
- `npm run production` will output a minified build for production use.
- `npm run clean` will remove the `/dist` folder.

## Github Pages

After you've built site site, you can publish it to Github Pages by using a `git subtree push`.  
Make sure you've committed `dist/` and run `git subtree push --prefix dist origin gh-pages`.  
If you don't want to use Github Pages add `dist/` to `.gitignore`.

