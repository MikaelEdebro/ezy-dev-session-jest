const GlobalProperties = {
  install(Vue, options) {
    Vue.prototype.$settings = {
      enableComments: true
    }
    Vue.prototype.$texts = {
      comments: 'Comments',
      addComment: 'Add comment',
      noComments: 'No comments for this post',
      numberOfPosts: 'Number of posts'
    }
  }
}

export default GlobalProperties
