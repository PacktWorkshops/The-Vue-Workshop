import { shallowMount } from '@vue/test-utils'
import About from '@/views/About.vue'

describe('About.vue', () => {
  it("renders the component with a user", () => {
    const user = "alice"
    const wrapper = shallowMount(About, {
      propsData: { user }
    })
  
    expect(wrapper.find('h1').text()).toBe(`About ${user}`)
  })
})