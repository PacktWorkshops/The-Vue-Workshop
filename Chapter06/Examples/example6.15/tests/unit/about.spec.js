import { shallowMount } from '@vue/test-utils'
import About from '@/views/About.vue'

describe('About.vue', () => {
  it("renders the component", () => {
    const wrapper = shallowMount(About)
  
    expect(wrapper.find('h1').text()).toBe(`This is an about page`)
  })
})