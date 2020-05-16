import createDataContext from './createDataContext'

const reducer = (state, action) => {
  const nextId = () => Math.floor(Math.random() * 99999)

  switch (action.type) {
    case 'add_blogpost':
      return [...state, { id: nextId(), ...action.payload }]
    case 'delete_blogpost':
      return state.filter(({ id }) => id != action.payload)
    default:
      return state
  }
}

const addBlogPost = dispatch => async (title, content) => {
  return dispatch({ type: 'add_blogpost', payload: { title, content } })
}

const deleteBlogPost = dispatch => id => dispatch({ type: 'delete_blogpost', payload: id })

export const { Context, Provider } = createDataContext(reducer, { addBlogPost, deleteBlogPost }, [
  { id: 1, title: 'Post #1', content: 'Content #1' },
])
