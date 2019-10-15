import { shallowMount } from '@vue/test-utils'
import Exercise from '@/components/Exercise5.vue'

describe('Exercise5.vue', () => {
  it('renders props.title when passed', () => {
    const title = 'Display title'
    const wrapper = shallowMount(Exercise, {})

    wrapper.setData({ title: title })

    expect(wrapper.find('h1').text()).toMatch(title)
  })
})
