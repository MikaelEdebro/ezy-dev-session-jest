# Front-end Unit Testing with Vue.js & Jest

1. Scaffold project with vue-cli
`vue init webpack dev-session-jest`

2. Run solution to make sure it's working
`npm run dev`

3. Install Jest + assisting libs
`npm install --save-dev jest @vue/test-utils vue-jest babel-jest jest-serializer-vue`

4. Install Vue dependencies
`npm install --save vuex vuex-persistedstate`

4. Add config to package.json
```
"scripts": {
  "test": "jest -w",
  "test-once": "jest"
}
```
