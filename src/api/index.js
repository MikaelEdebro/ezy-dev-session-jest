import axios from 'axios'

export function getBlogPosts() {
  return axios.get('http://jsonplaceholder.typicode.com/posts')
}

export function getComments(postId) {
  return axios.get(
    `http://jsonplaceholder.typicode.com/posts/${postId}/comments`
  )
}
