import { shallowMount } from '@vue/test-utils'
import users from '@/assets/users.js';
import UserInfo from '@/views/UserInfo.vue'

describe('User', () => {
  it("render components", () => {
    const wrapper = shallowMount(UserInfo);

    expect(wrapper.find('h2').text()).toBe('Name:')
    expect(wrapper.find('p').text()).toBe('Age: 0')
  })  
})

describe('beforeRouteEnter', () => {
    it("call next()", async () => {
      const next = jest.fn()
      const wrapper = shallowMount(UserInfo);
  
      UserInfo.beforeRouteEnter.call(wrapper.vm, { params: { id: 1 } }, undefined, next)
      await wrapper.vm.$nextTick()
  
      expect(next).toHaveBeenCalledWith(expect.anything())
    })  
  })
    
  describe('beforeRouteUpdate', () => {
    it("call next() on new user", async () => {
      const next = jest.fn()
      const wrapper = shallowMount(UserInfo);
  
      UserInfo.beforeRouteUpdate.call(wrapper.vm, { params: { id: 2 }}, undefined, next)
      await wrapper.vm.$nextTick()
  
      expect(wrapper.find('h2').text()).toBe(`Name: ${users[1].name}`);
      expect(wrapper.find('p').text()).toBe(`Age: ${users[1].age}`);
    })
  })
  