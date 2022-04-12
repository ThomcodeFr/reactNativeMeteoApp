import React from 'react'
import { View, TextInput, Button, StyleSheet } from 'react-native'
import { WEATHER_API_KEY } from 'react-native-dotenv'

/* const GEO_WEATHER_URL = 'http://api.openweathermap.org/geo/1.0/direct?q='

const { cityName } = local_names + [Fr]


const geoweatherUrl = `${ GEO_WEATHER_URL }{cityName}&limit={limit}&appid=${ WEATHER_API_KEY }&lang=Fr`

const response = await fetch(geoweatherUrl) // Cela va créer la requête

console.log(cityName)
console.log(response);
 */
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