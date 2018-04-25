import Vuex from 'vuex'
import { shallow, createLocalVue } from '@vue/test-utils'
import BlogComments from '@/components/blog/BlogComments'
import TestHelpers from 'test/test-helpers'
import Loader from '@/components/Loader'
import flushPromises from 'flush-promises'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('BlogComments', () => {
  let wrapper
  let store
  // eslint-disable-next-line
  let h
  let actions
  beforeEach(() => {
    actions = {
      getComments: jest.fn(() => {
        return new Promise(resolve => {
          process.nextTick(() => {
            resolve([{ title: 'title 1' }, { title: 'title 2' }])
          })
        })
      })
    }
    store = new Vuex.Store({
      modules: {
        blog: {
          namespaced: true,
          actions
        }
      }
    })
    wrapper = shallow(BlogComments, {
      localVue,
      store,
      propsData: {
        id: 1
      },
      stubs: {
        Loader
      },
      mocks: {
        $texts: {
          noComments: 'No comments'
        }
      }
    })
    h = new TestHelpers(wrapper, expect)
  })

  it('renders without errors', () => {
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  it('calls action to get comments on mount', () => {
    expect(actions.getComments).toHaveBeenCalled()
  })

  it('shows loader initially, and hides it when comments have been loaded', async () => {
    h.domHas(Loader)
    await flushPromises()
    h.domHasNot(Loader)
  })

  it('has list of comments', async () => {
    await flushPromises()
    const comments = wrapper.findAll('.comment')
    expect(comments.length).toBe(2)
  })

  it('shows message if there are no comments', async () => {
    await flushPromises()
    wrapper.setData({
      comments: []
    })
    h.domHas('.no-comments')
    h.see('No comments')
  })
})
