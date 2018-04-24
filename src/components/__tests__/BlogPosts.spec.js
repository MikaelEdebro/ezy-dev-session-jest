import Vuex from 'vuex'
import { shallow, createLocalVue } from '@vue/test-utils'
import BlogPosts from '@/components/BlogPosts'
import TestHelpers from 'test/test-helpers'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('BlogPosts', () => {
  let wrapper
  let store
  // eslint-disable-next-line
  let h
  beforeEach(() => {
    store = new Vuex.Store({})
    wrapper = shallow(BlogPosts, { localVue, store })
    h = new TestHelpers(wrapper, expect)
  })

  it('sanity test', () => {
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
