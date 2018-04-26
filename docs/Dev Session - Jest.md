# Front-end Unit Testing with Vue.js & Jest

1. Scaffold project with vue-cli
vue init webpack jest-new

2. Run solution to make sure it's working
npm run dev

3. Install Jest + assisting libs
npm install --save-dev jest @vue/test-utils vue-jest babel-jest jest-serializer-vue node-sass sass-loader flush-promises

4. Install Vue dependencies
npm install --save vuex axios promise.prototype.finally

5. Add config to package.json (copy from existing)
```json
"scripts": {
  "test": "jest --watchAll",
  "test-once": "jest"
},
"jest": {
  "moduleFileExtensions": [
    "js",
    "json",
    "vue"
  ],
  "transform": {
    ".*\\.(vue)$": "<rootDir>/node_modules/vue-jest",
    "^.+\\.js$": "<rootDir>/node_modules/babel-jest"
  },
  "moduleNameMapper": {
    "^@/(.*)$": "<rootDir>/src/$1",
    "^test/(.*)$": "<rootDir>/test/$1"
  },
  "snapshotSerializers": [
    "<rootDir>/node_modules/jest-serializer-vue"
  ],
  "setupFiles": [
    "<rootDir>/test/jest-setup.js"
  ]
}
```

6. Add config to .babelrc
```json
"env": {
  "test": {
    "presets": [["env", { "targets": { "node": "current" } }]]
  }
}
```

7. Add config to .eslintrc.js
Copy whole file from existing

8. Add project snippets
Copy over .vscode folder

9. Add existing content
Copy over everything except components folder

10. git init
In order for advanced watch mode to work (currently not using, but i real app it's good)

11. Run app to make sure it works

12. Run tests to make sure it works

## Tests for BlogPosts.vue
"shows loader initially, and hides when posts have loaded"
"shows correct number of posts"

## Tests for BlogPost.vue
"hides the body initially"
"expands body when clicking title"
"renders the correct content"
"adds expanded class to expanded blog post"
"shows comments when expanding"
"only shows comments if enabled in $settings"

## Tests for BlogComments.vue
"calls action to get comments on mount"
"shows loader initially, and hides it when comments have been loaded"
"has list of comments"
"shows message if there are no comments"
