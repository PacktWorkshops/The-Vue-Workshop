import PostListItem from '../src/components/PostListItem.vue'

test('truncate should take only the first 8 characters', () => {
  expect(
    PostListItem.filters.truncate('longer than 8 characters')
  ).toEqual('longer t')
})
