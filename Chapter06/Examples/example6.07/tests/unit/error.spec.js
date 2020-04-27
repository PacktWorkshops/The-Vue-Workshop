import { shallowMount } from '@vue/test-utils'
import Error from '@/views/Error.vue'

describe('Error.vue', () => {
  it('renders component', () => {
    const wrapper = shallowMount(Error)
    expect(wrapper.find('h2').text()).toBe('No param passed.');
  })
})