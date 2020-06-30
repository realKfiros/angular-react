# ngr 
Embed React components in your Angular app  

[![npm version](https://badge.fury.io/js/ngr.svg)](https://badge.fury.io/js/ngr)
![Twitter Follow](https://img.shields.io/twitter/follow/realKfiros?style=social)
### Getting started
1. Install the dependency from npm:
```
npm install --save ngr react react-dom
```
2. Add jsx files support to ```compiler options``` in the tsconfig.json file in your project:  
```
"jsx": "react"
```
### Creating a React component
```
ng generate ngr:component hero-detail
```
* Note: You need to add the component to your module.