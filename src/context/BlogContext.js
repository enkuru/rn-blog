import createDataContext from './createDataContext'
import jsonServer from '../api/jsonServer'

const reducer = (state, action) => {
  const nextId = () => Math.floor(Math.random() * 99999)

  switch (action.type) {
    case 'get_blogpost':
      return action.payload
    case 'add_blogpost':
      return [...state, { id: nextId(), ...action.payload }]
    case 'delete_blogpost':
      return state.filter(({ id }) => id != action.payload)
    case 'edit_blogpost':
      return state.map(blogPost => (blogPost.id === action.payload.id ? action.payload : blogPost))
    default:
      return state
  }
}

const actions = {
  getBlogPosts: dispatch => async () => {
    const { data } = await jsonServer('blogposts')
    return dispatch({ type: 'get_blogposts', payload: data })
  },
  addBlogPost: dispatch => async (title, content) => {
    return dispatch({ type: 'add_blogpost', payload: { title, content } })
  },
  editBlogPost: dispatch => async blogPost => {
    return dispatch({ type: 'edit_blogpost', payload: blogPost })
  },
  deleteBlogPost: dispatch => id => dispatch({ type: 'delete_blogpost', payload: id }),
}

export const { Context, Provider } = createDataContext(reducer, actions, [])
