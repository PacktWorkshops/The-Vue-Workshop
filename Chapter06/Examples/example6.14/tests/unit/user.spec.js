import { shallowMount } from '@vue/test-utils'
import User from '@/views/User.vue'

describe('User', () => {
  it("render components", () => {
    const wrapper = shallowMount(User, {
      stubs: ['router-link', 'router-view'],
      mocks: {
        $route: {
          params: { id: '1' }
        }
      }
    });

    expect(wrapper.find('h1').text()).toBe('About a user: 1');
  })  
})
  