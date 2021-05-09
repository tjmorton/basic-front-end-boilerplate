# Front End Boilerplate

A bare-bones front-end vanilla js boilerplate, leveraging

- Webpack and Babel to allow us to modern JS and npm for packages
- TypeScript
- ESlint and prettier settings to keep everything nice

There are deliberately no frameworks in this boilerplate. They could be added on later.

The intention is that this should allow quick prototyping or fun-and-games projects to be done while using JS in a manner that's more familiar to me: i.e. using import / export, availability of NPM modules, strong typing.

# To Do

- Add support for async / await, I don't think it comes out of the box with babel.

# NPM Scripts

Usage: `npm run <target>`

| _target_    | _Description_                                                                          |
| ----------- | -------------------------------------------------------------------------------------- |
| dev         | Build the code in /src and run the webpack server                                      |
| build-dev   | Build the code in /src, only useful for debug purposes                                 |
| build-prod  | Build the code in /src with production optimizations, useful to build release artifact |
| serve-build | Serve whatever is _currenty_ in the ./build folder (no hot reload)                     |
| lint        | lint and check the format of the code in the project                                   |
