import { shallowMount } from '@vue/test-utils'
import Exercise from '@/components/Exercise2A.vue'

describe('Exercise2A.vue', () => {
  it('renders props.title when passed', () => {
    const title = 'My first component!'
    const wrapper = shallowMount(Exercise, {
      propsData: { title },
    })
    expect(wrapper.text()).toMatch(title)
  })
})
