import { shallowMount } from '@vue/test-utils'
import TimeLineExample from '@/components/TimeLineExample.vue'

describe('TimeLineExample.vue', () => {
  it('renders component', () => {
    const wrapper = shallowMount(TimeLineExample)
    expect(wrapper.find('#box-green').isVisible()).toBe(true)
    expect(wrapper.find('#box-red').isVisible()).toBe(true)
    expect(wrapper.find('#box-purple').isVisible()).toBe(true)
  })
})
