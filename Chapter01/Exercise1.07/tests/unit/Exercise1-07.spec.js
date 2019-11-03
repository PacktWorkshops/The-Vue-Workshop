import { shallowMount } from '@vue/test-utils'
import Exercise from '@/components/Exercise1-07.vue'

describe('Exercise1-07.vue', () => {
  const wrapper = shallowMount(Exercise, {})

  it('data returns correctly in list element', () => {
    const name = 'John Doe'
    const language = 'Javascript'
    wrapper.setData({
      name: name,
      language: language,
    })

    expect(
      wrapper
        .find('overview')
        .find('li')[1]
        .text()
    ).toEqual(name)
    expect(
      wrapper
        .find('overview')
        .find('li')[2]
        .text()
    ).toEqual(language)
  })
})
