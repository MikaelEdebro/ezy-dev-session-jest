import { getters, mutations } from '@/store/modules/blog'

describe('blog store module', () => {
  let state
  beforeEach(() => {
    state = {
      blogPosts: []
    }
  })
  describe('getters', () => {
    it('hasBlogPosts logic works', () => {
      expect(getters.hasBlogPosts(state)).toBe(false)
      state.blogPosts = [{}, {}]
      expect(getters.hasBlogPosts(state)).toBe(true)
    })
    it('numberOfPosts returns correct count', () => {
      expect(getters.numberOfPosts(state)).toBe(0)
      state.blogPosts = [{}, {}]
      expect(getters.numberOfPosts(state)).toBe(2)
    })
  })

  describe('mutations', () => {
    it('adds blog posts correctly', () => {
      mutations.saveBlogPosts(state, [{ title: 'New post' }])
      expect(state.blogPosts).toEqual([{ title: 'New post' }])
    })
  })
})
