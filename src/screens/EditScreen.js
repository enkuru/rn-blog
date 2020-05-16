import React, { useContext, useState } from 'react'
import { StyleSheet, Text, View, TextInput, Button } from 'react-native'
import { Context } from '../context/BlogContext'

const EditScreen = ({ navigation }) => {
  const { state, addBlogPost } = useContext(Context)
  const id = navigation.getParam('id')
  const blogPost = state.find(({ id }) => id === id)

  const [title, setTitle] = useState(blogPost.title)
  const [content, setContent] = useState(blogPost.content)

  const onSubmit = () => {
    addBlogPost(title, content).then(() => navigation.navigate('Show', { id }))
  }

  return (
    <View>
      <Text style={styles.label}>Enter New Title:</Text>
      <TextInput style={styles.input} value={title} onChangeText={text => setTitle(text)} />
      <Text style={styles.label}>Enter New Content:</Text>
      <TextInput style={styles.input} value={content} onChangeText={text => setContent(text)} />
      <View style={styles.editButton}>
        <Button title='Save' onPress={onSubmit} />
      </View>
    </View>
  )
}

export default EditScreen

const styles = StyleSheet.create({
  input: {
    fontSize: 18,
    borderWidth: 1,
    borderColor: 'gray',
    marginHorizontal: 10,
    paddingHorizontal: 4,
    paddingVertical: 2,
    borderRadius: 4,
  },
  label: {
    fontSize: 20,
    marginBottom: 5,
    marginLeft: 10,
    marginTop: 10,
  },
  editButton: {
    marginHorizontal: 100,
    marginTop: 10,
  },
})
