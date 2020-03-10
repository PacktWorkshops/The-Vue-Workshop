export default {
  functional: true,
  render(h, context) {
    return h(
      'h2',
      `Functional Render: ${context.props.greeting} ${context.props.audience}`
    )
  }
}
