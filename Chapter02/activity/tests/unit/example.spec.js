import { shallowMount } from '@vue/test-utils'
import App from '@/App.vue'

describe('App.vue', () => {
  it('renders author information', () => {
    const name = 'John Doe'
    const title = 'Web Developer'
    const bio = 'From Melbourne'
    const wrapper = shallowMount(App, {
      computed: { name, title, bio },
    })

    // expect(wrapper.find('h2')).toMatch(name + ' ' + title)
    // expect(wrapper.find('.author p').toMatch(bio))

    expect(wrapper.find('.author > h2').text()).toMatch(name + ' ' + title)
  })
  // it('renders a blog list', () => {
  //   const msg = 'new message'
  //   const wrapper = shallowMount(App, {
  //     propsData: { msg },
  //   })
  //   expect(wrapper.find('h2')).toMatch(name + ' ' + title)

  // })
})
