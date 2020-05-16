import React, { useState, useContext } from 'react'
import { StyleSheet, Text, View, TextInput, Button } from 'react-native'
import { Context } from '../context/BlogContext'

const CreateScreen = ({ navigation }) => {
  const { addBlogPost } = useContext(Context)

  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')

  const onSubmit = () => {
    addBlogPost(title, content).then(() => navigation.navigate('Index'))
  }

  return (
    <View>
      <Text style={styles.label}>Enter Title:</Text>
      <TextInput style={styles.input} value={title} onChangeText={text => setTitle(text)} />
      <Text style={styles.label}>Enter Content:</Text>
      <TextInput style={styles.input} value={content} onChangeText={text => setContent(text)} />
      <View style={styles.addButton}>
        <Button title='Save' onPress={onSubmit} />
      </View>
    </View>
  )
}

export default CreateScreen

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
  addButton: {
    marginHorizontal: 100,
    marginTop: 10,
  },
})
