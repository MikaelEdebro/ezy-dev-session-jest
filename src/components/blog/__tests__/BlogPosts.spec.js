import Vuex from 'vuex'
import { shallow, createLocalVue } from '@vue/test-utils'
import Loader from '@/components/Loader'
import BlogPosts from '@/components/blog/BlogPosts'
import TestHelpers from 'test/test-helpers'
import { getters, mutations, actions } from '@/store/modules/blog'
import flushPromises from 'flush-promises'

const localVue = createLocalVue()
localVue.use(Vuex)

jest.mock('@/api', () => ({
  getBlogPosts: jest.fn(() => {
    return new Promise(resolve => {
      process.nextTick(() => {
        resolve({ data: [{ title: 'title 1' }, { title: 'title 2' }] })
      })
    })
  })
}))

describe('BlogPosts', () => {
  let wrapper
  let store
  // eslint-disable-next-line
  let h
  beforeEach(() => {
    store = new Vuex.Store({
      modules: {
        blog: {
          namespaced: true,
          state: {
            blogPosts: []
          },
          getters,
          mutations,
          actions
        }
      }
    })
    wrapper = shallow(BlogPosts, {
      localVue,
      store,
      mocks: {
        $texts: {
          numberOfPosts: 'Number of posts'
        }
      },
      stubs: {
        Loader,
        BlogPost: '<div class="post"></div>'
      }
    })
    h = new TestHelpers(wrapper, expect)
    jest.useFakeTimers()
  })

  afterEach(() => {
    jest.useRealTimers()
  })

  it('component mounts without errors', () => {
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  it('shows loader initially, and hides when posts have loaded', async () => {
    h.domHas('.loader')
    await flushPromises()
    jest.runAllTimers()
    h.domHasNot('.loader')
  })

  it('shows correct number of posts', async () => {
    await flushPromises()
    jest.runAllTimers()
    const blogPosts = wrapper.findAll('.post')
    expect(blogPosts.length).toBe(2)
  })
})
