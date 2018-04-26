import Vuex from 'vuex'
import { shallow, createLocalVue } from '@vue/test-utils'
import BlogPost from '@/components/blog/BlogPost'
import TestHelpers from 'test/test-helpers'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('BlogPost', () => {
  let wrapper
  let store
  // eslint-disable-next-line
  let h
  beforeEach(() => {
    store = new Vuex.Store({})
    wrapper = shallow(BlogPost, {
      localVue,
      store,
      mocks: {
        $settings: {
          enableComments: true
        }
      },
      stubs: {
        BlogComments: '<div class="stub-comments"></div>'
      },
      propsData: {
        post: { title: 'Some title', body: 'Lorem ipsum', id: 1 }
      }
    })
    h = new TestHelpers(wrapper, expect)
  })

  it('can mount without errors', () => {
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  it('hides the body initially', () => {
    h.domHasNot('.body')
  })

  it('expands body when clicking title', () => {
    h.click('.title')
    h.domHas('.body')
    h.click('.title')
    h.domHasNot('.body')
  })
  it('renders the correct content', () => {
    h.see('Some title')
    h.click('.title')
    h.see('Lorem ipsum')
  })
  it('adds expanded class to expanded blog post', () => {
    h.click('.title')
    expect(wrapper.classes()).toContain('expanded')
  })
  it('shows comments when expanding', () => {
    h.click('.title')
    h.domHas('.stub-comments')
  })
  it('only shows comments if enabled in $settings', () => {
    h.click('.title')
    h.domHas('.stub-comments')
    wrapper.vm.$settings.enableComments = false
    h.domHasNot('.stub-comments')
  })
})
