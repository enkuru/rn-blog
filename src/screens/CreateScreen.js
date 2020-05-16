import React, { useContext } from 'react'
import { StyleSheet } from 'react-native'
import { Context } from '../context/BlogContext'
import BlogPostForm from '../components/BlogPostForm'

const CreateScreen = ({ navigation }) => {
  const { addBlogPost } = useContext(Context)

  const onSubmit = (title, content) => {
    addBlogPost(title, content).then(() => navigation.navigate('Index'))
  }

  return <BlogPostForm onSubmit={onSubmit} />
}

export default CreateScreen

const styles = StyleSheet.create({})
