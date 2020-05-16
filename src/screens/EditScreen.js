import React, { useContext } from 'react'
import { StyleSheet } from 'react-native'
import { Context } from '../context/BlogContext'
import BlogPostForm from '../components/BlogPostForm'

const EditScreen = ({ navigation }) => {
  const { state, editBlogPost } = useContext(Context)
  const id = navigation.getParam('id')
  const blogPost = state.find(blogPost => blogPost.id === id)

  const onSubmit = (title, content) => {
    editBlogPost(id, title, content).then(() => navigation.pop())
  }

  return (
    <BlogPostForm
      onSubmit={onSubmit}
      initialValues={{ title: blogPost.title, content: blogPost.content }}
    />
  )
}

export default EditScreen

const styles = StyleSheet.create({})
