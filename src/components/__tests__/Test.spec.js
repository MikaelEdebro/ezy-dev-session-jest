import Vuex from 'vuex'
import { shallow, createLocalVue } from 'vue-test-utils'
import HelloWorld from '@/components/HelloWorld'
import TestHelpers from 'test/test-helpers'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('HelloWorld', () => {
  let wrapper
  let store
  // eslint-disable-next-line
  let h
  beforeEach(() => {
    store = new Vuex.Store({})
    wrapper = shallow(HelloWorld, { localVue, store })
    h = new TestHelpers(wrapper, expect)
  })

  it('sanity test', () => {
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
