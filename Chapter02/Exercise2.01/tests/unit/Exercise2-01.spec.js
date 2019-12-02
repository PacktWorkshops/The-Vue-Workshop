import { shallowMount } from '@vue/test-utils'
import Exercise from '@/components/Exercise2-01.vue'

describe('Exercise2-01.vue', () => {
  const wrapper = shallowMount(Exercise, {})

  it('renders input v-model when passed', () => {
    const firstName = 'John'
    const lastName = 'Doe'

    wrapper.setData({
      firstName: firstName,
      lastName: lastName,
    })
    expect(wrapper.text()).toEqual(`${firstName} ${lastName}`)
  })
})
