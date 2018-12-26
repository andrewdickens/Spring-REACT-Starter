# Spring/REACT starter

## Spring setup

[Spring docs](https://spring.io/guides/tutorials/react-and-spring-data-rest/)

To run backend, call ```gradle bootrun``` from the root directory.

### Tools needed:
* [Homebrew](https://brew.sh/)
* [Gradle](https://gradle.org/)

## REACT setup

For reference: https://developer.okta.com/blog/2018/07/19/simple-crud-react-and-spring-boot

Create a new project in the root directory of the project using ```Yarn``` (same directory as the previously created Spring app).  

```
yarn create react-app app
```  
  
After completed, install [Bootstrap](https://getbootstrap.com/) (for styling) and a few other dependencies.

```
cd app
yarn add bootstrap@4.1.3 react-cookie@3.0.4 react-router-dom@4.3.1 reactstrap@6.5.0
```  

Add Bootstrap’s CSS file as an import in ```app/src/index.js```.

To run frontend, call ```yarn start``` from the ```/app``` directory.

### Tools needed
* [Node](https://nodejs.org/en/)
* [React](https://reactjs.org/)
* [NPM](https://www.npmjs.com/)
* [Yarn](https://yarnpkg.com/en/)
