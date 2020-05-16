import React, { useContext, useEffect } from 'react'
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native'
import { Context } from '../context/BlogContext'
import { Feather } from '@expo/vector-icons'

const IndexScreen = ({ navigation }) => {
  const { state, getBlogPosts, deleteBlogPost } = useContext(Context)

  useEffect(() => {
    getBlogPosts()
    const listener = navigation.addListener('didFocus', () => getBlogPosts())
    return () => listener.remove()
  }, [])

  return (
    <View>
      <FlatList
        data={state}
        keyExtractor={({ id }) => `${id}`}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate('Show', ({ id } = item))}>
            <View style={styles.row}>
              <Text style={styles.title}>{item.title}</Text>
              <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
                <Feather style={styles.icon} name='trash' />
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  )
}

IndexScreen.navigationOptions = ({ navigation }) => ({
  headerRight: () => (
    <TouchableOpacity style={styles.addIcon} onPress={() => navigation.navigate('Create')}>
      <Feather name='plus' size={30} />
    </TouchableOpacity>
  ),
})

export default IndexScreen

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 20,
    paddingHorizontal: 10,
    borderTopWidth: 1,
    borderColor: 'gray',
  },
  title: {
    fontSize: 18,
  },
  icon: {
    fontSize: 22,
  },
  addIcon: {
    marginRight: 15,
  },
})
