# Soon to be sequencer app

At the moment I have a bare-bones front-end vanilla js boilerplate, leveraging webpack and babel to allow us to modern JS and npm for packages. On top of that there's some eslint and prettier settings to keep everything nice.

# NPM Scripts

Usage: `npm run <target>`

| _target_    | _Description_                                                                          |
| ----------- | -------------------------------------------------------------------------------------- |
| dev         | Build the code in /src and run the webpack server                                      |
| build-dev   | Build the code in /src, only useful for debug purposes                                 |
| build-prod  | Build the code in /src with production optimizations, useful to build release artifact |
| serve-build | Serve whatever is _currenty_ in the ./build folder (no hot reload)                     |
| lint        | lint and check the format of the code in the project                                   |
