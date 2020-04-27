import { shallowMount } from '@vue/test-utils'
import UserExtra from '@/views/UserExtra.vue'

describe('User', () => {
  it("render components", () => {
    const wrapper = shallowMount(UserExtra);

    expect(wrapper.text()).toBe("I'm an extra section");
  })  
})
  