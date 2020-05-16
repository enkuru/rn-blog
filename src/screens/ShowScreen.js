import React, { useContext } from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { Context } from '../context/BlogContext'
import { MaterialIcons } from '@expo/vector-icons'

const ShowScreen = ({ navigation }) => {
  const { state } = useContext(Context)
  const id = navigation.getParam('id')
  const blogPost = state.find(({ id }) => id === id)

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{blogPost.title}</Text>
      <Text>{blogPost.content}</Text>
    </View>
  )
}

ShowScreen.navigationOptions = ({ navigation }) => ({
  headerRight: () => (
    <TouchableOpacity style={styles.editIcon} onPress={() => navigation.navigate('Edit', { id })}>
      <MaterialIcons name='edit' size={30} />
    </TouchableOpacity>
  ),
})

export default ShowScreen

const styles = StyleSheet.create({
  container: {
    margin: 10,
    borderColor: 'black',
    borderWidth: 1,
    paddingHorizontal: 8,
    paddingTop: 5,
    paddingBottom: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
    marginBottom: 5,
  },
  editIcon: {
    marginRight: 15,
  },
})
