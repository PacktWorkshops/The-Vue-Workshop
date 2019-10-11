import { shallowMount } from '@vue/test-utils'
import Exercise from '@/components/Exercise6B.vue'

describe('Exercise6B.vue', () => {
  const wrapper = shallowMount(Exercise, {})

  it('hidden elements to not be rendered', () => {
    const name = 'John Doe'
    wrapper.setData({
      name: name,
    })

    // wrapper.find('input').setValue(name)

    expect(wrapper.find('input').text()).toEqual('')
    // expect(wrapper.find('h2')).toEqual({})
  })
})
