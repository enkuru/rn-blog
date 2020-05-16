import createDataContext from './createDataContext'
import jsonServer from '../api/jsonServer'

const reducer = (state, action) => {
  switch (action.type) {
    case 'get_blogposts':
      return action.payload
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
    const { data } = await jsonServer.get('/blogposts')
    dispatch({ type: 'get_blogposts', payload: data })
  },
  addBlogPost: () => async (title, content) => {
    await jsonServer.post('/blogposts', { title, content })
  },
  editBlogPost: dispatch => async (id, title, content) => {
    const { data } = await jsonServer.put(`/blogposts/${id}`, { title, content })
    dispatch({ type: 'edit_blogpost', payload: data })
  },
  deleteBlogPost: dispatch => async id => {
    await jsonServer.delete(`/blogposts/${id}`)
    dispatch({ type: 'delete_blogpost', payload: id })
  },
}

export const { Context, Provider } = createDataContext(reducer, actions, [])
