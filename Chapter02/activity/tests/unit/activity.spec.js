import { shallowMount, mount } from '@vue/test-utils'
import App from '@/App.vue'

describe('App.vue', () => {
  it('renders name', () => {
    const name = 'John Doe'
    const { vm } = mount(App)

    expect(vm.authors).toStrictEqual([])
    vm.authors = [
      {
        fields: {
          name,
        },
      },
    ]

    expect(vm.name).toBe(name)
  })
  it('renders title', () => {
    const title = 'Web Developer'
    const { vm } = mount(App)

    expect(vm.authors).toStrictEqual([])
    vm.authors = [
      {
        fields: {
          title,
        },
      },
    ]

    expect(vm.title).toBe(title)
  })
  it('renders bio', () => {
    const bio = 'From Melbourne'
    const { vm } = shallowMount(App)

    expect(vm.authors).toStrictEqual([])
    vm.authors = [
      {
        fields: {
          shortBio: bio,
        },
      },
    ]

    expect(vm.bio).toBe(bio)
  })

  it('posts object exists', async () => {
    const { vm } = mount(App)

    const entries = {
      items: [
        {
          fields: {
            title: 'example',
          },
        },
      ],
    }

    // Example Contentful object
    vm.posts = entries.items

    expect(vm.posts).toBe(entries.items)
  })
})
