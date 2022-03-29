import React from 'react'
import { View, TextInput, Button, StyleSheet } from 'react-native'

class Search extends React.Component {
  render() {
    return (
      <View style={styles.searchStyle}>
        <View >
          <TextInput style={styles.row} textAlign={ 'center' } fontSize={ 30 } placeholder="Localisation" />
        </View>
        <Button title="Rechercher" onPress={() => {}} />
      </View>
    )
  }
}

export default Search

const styles = StyleSheet.create({
  searchStyle: {
    marginBottom: 50,
  },
  row: {
    fontSize: 20,
    borderBottomColor: 'black',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },
})