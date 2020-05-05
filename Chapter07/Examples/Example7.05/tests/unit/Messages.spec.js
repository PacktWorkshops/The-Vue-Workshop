import { mount } from '@vue/test-utils'
import Messages from '@/components/Messages.vue'

describe('Messages.vue', () => {
  it('should render 8 messages ', () => {
    const wrapper = mount(Messages, {
      data() {
        return {
          show: true
        }
      },
    })
    
    expect(wrapper.findAll('p').length).toBe(8)
    expect(wrapper.findAll('p.msg-in-animate').isVisible()).toBe(true)
  })
  it('should render 4 visible messages', () => {
    const wrapper = mount(Messages, {
      data() {
        return {
          show: false
        }
      },
    })
    
    expect(wrapper.findAll('p').length).toBe(8)
    expect(wrapper.findAll('p.msg-in-animate').isVisible()).toBe(false)
  })
})