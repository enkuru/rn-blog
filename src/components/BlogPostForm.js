import React, { useState } from 'react'
import { StyleSheet, Text, View, TextInput, Button } from 'react-native'

const BlogPostForm = ({ onSubmit, initialValues }) => {
  const [title, setTitle] = useState(initialValues.title)
  const [content, setContent] = useState(initialValues.content)

  return (
    <View>
      <Text style={styles.label}>Enter Title:</Text>
      <TextInput style={styles.input} value={title} onChangeText={text => setTitle(text)} />
      <Text style={styles.label}>Enter Content:</Text>
      <TextInput style={styles.input} value={content} onChangeText={text => setContent(text)} />
      <View style={styles.button}>
        <Button title='Save' onPress={() => onSubmit(title, content)} />
      </View>
    </View>
  )
}

BlogPostForm.defaultProps = {
  initialValues: { title: '', content: '' },
}

export default BlogPostForm

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
  button: {
    marginHorizontal: 100,
    marginTop: 10,
  },
})
