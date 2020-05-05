import { mount } from '@vue/test-utils'
import HelloWorld from '@/components/HelloWorld.vue'

describe('HelloWorld.vue', () => {
  it('should render Message', () => {
    const msg = 'new message'
    const wrapper = mount(HelloWorld, {
      data() {
        return {
          show: true
        }
      },
      propsData: { msg }
    })
    
    expect(wrapper.find('h1').text()).toBe(msg)
  })
  it('should not render Message', () => {
    const msg = 'new message'
    const wrapper = mount(HelloWorld, {
      data() {
        return {
          show: false
        }
      },
      propsData: { msg }
    })
    
    expect(wrapper.find('h1').exists()).toBe(false)
  })
})