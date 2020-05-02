import { shallowMount } from '@vue/test-utils'
import DefaultLayout from '@/layouts/default.vue'

describe('layouts/default.vue', () => {
  it("renders the component", () => {
    const wrapper = shallowMount(DefaultLayout, {
        stubs: ['router-link']
    })
  
    expect(wrapper.find('footer').text()).toBe(`Vue Workshop Chapter 06`)
  })
})