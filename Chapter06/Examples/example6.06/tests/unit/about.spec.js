import { shallowMount } from '@vue/test-utils'
import About from '@/views/About.vue'

describe('About.vue', () => {
  it("renders the component with a user", () => {
    const user = "alice"
    const age = 32
    const wrapper = shallowMount(About, {
      propsData: { user, age }
    })
  
    expect(wrapper.find('h1').text()).toBe(`About ${user}`)
    expect(wrapper.find('h2').text()).toBe(`Age: ${age}`)
  })
})