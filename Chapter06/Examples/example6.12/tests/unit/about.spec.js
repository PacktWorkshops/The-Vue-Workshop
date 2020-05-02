import { shallowMount } from '@vue/test-utils'
import About from '@/views/About.vue'

describe('About.vue', () => {
  it("renders the component", () => {
    const wrapper = shallowMount(About)
  
    expect(wrapper.find('h1').text()).toBe(`About`)
  })
})

describe('beforeRouteEnter', () => {
  it("call next() with callback when no user", async () => {
    const next = jest.fn()
    const wrapper = shallowMount(About);

    About.beforeRouteEnter.call(wrapper.vm, { params: {} }, undefined, next)
    await wrapper.vm.$nextTick()

    expect(next).toHaveBeenCalledWith(expect.anything())
  })

  it("call next() without callback when there is user", async () => {
    const next = jest.fn()
    const wrapper = shallowMount(About);

    About.beforeRouteEnter.call(wrapper.vm, { params: { user: 'Alex' } }, undefined, next)
    await wrapper.vm.$nextTick()

    expect(next).toHaveBeenCalled();
    expect(next).not.toHaveBeenCalledWith(expect.anything())
  })
})

describe('beforeRouteLeave', () => {
  it("call next() with callback when no user", async () => {
    global.window = Object.create(window);
    delete window.confirm
    window.confirm = jest.fn(() => true);

    const next = jest.fn()
    const wrapper = shallowMount(About);

    About.beforeRouteLeave.call(wrapper.vm, undefined, undefined, next)
    await wrapper.vm.$nextTick()

    expect(next).toHaveBeenCalledWith(true)
  })
})