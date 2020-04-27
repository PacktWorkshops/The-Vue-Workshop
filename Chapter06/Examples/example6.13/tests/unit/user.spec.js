import { shallowMount } from '@vue/test-utils'
import User from '@/views/User.vue'
import users from '@/assets/users.js'

describe('beforeRouteEnter', () => {
  it("call next()", async () => {
    const next = jest.fn()
    const wrapper = shallowMount(User, {
      mocks: {
        $route: {
          params: { id: '1' }
        }
      }
    });

    User.beforeRouteEnter.call(wrapper.vm, { params: {} }, undefined, next)
    await wrapper.vm.$nextTick()

    expect(next).toHaveBeenCalledWith(expect.anything())
  })  
})
  
describe('beforeRouteUpdate', () => {
  it("call next() on new user", async () => {
    const next = jest.fn()
    const wrapper = shallowMount(User, {
      mocks: {
        $route: {
          params: { id: '1' }
        }
      }
    });

    User.beforeRouteUpdate.call(wrapper.vm, { params: { id: '2'}}, undefined, next)
    await wrapper.vm.$nextTick()

    expect(wrapper.find('h2').text()).toBe(`Name: ${users[1].name}`);
    expect(wrapper.find('p').text()).toBe(`Age: ${users[1].age}`);
  })
})