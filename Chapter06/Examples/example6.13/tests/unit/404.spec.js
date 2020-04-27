import { shallowMount } from '@vue/test-utils'
import ErrorComp from '@/views/404.vue'

describe('404.vue', () => {
  it('renders component', () => {
    const wrapper = shallowMount(ErrorComp)
    expect(wrapper.text()).toBe('Not found. Please try again');
  })
})