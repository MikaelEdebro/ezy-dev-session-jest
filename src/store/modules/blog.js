import { getBlogPosts, getComments } from '@/api'

const PROMISE_DELAY = 2000

export const state = {
  blogPosts: []
}

export const getters = {
  blogPosts: state => state.blogPosts,
  hasBlogPosts: state => state.blogPosts.length > 0,
  numberOfPosts: state => state.blogPosts.length
}

export const mutations = {
  saveBlogPosts(state, blogPosts) {
    state.blogPosts = blogPosts
  }
}

export const actions = {
  getBlogPosts({ commit }) {
    return new Promise((resolve, reject) => {
      getBlogPosts()
        .then(res => {
          setTimeout(() => {
            const posts = res.data
            commit('saveBlogPosts', posts)
            resolve(posts)
          }, PROMISE_DELAY)
        })
        .catch(error => reject(error))
    })
  },
  getComments({ commit }, postId) {
    return new Promise((resolve, reject) => {
      getComments(postId)
        .then(res => {
          setTimeout(() => {
            resolve(res.data)
          }, PROMISE_DELAY)
        })
        .catch(error => reject(error))
    })
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
