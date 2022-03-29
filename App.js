import { StatusBar } from 'expo-status-bar'
import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import * as Location from 'expo-location'
import Search from './components/Search'
import WeatherInfo from './components/WeatherInfo'
import ReloadIcon from './components/ReloadIcons'
import WeatherDetails from './components/WeatherDetails'
import { colors } from './utils/index.js'

export default function App() {
  const [errorMessage, setErrorMessage] = useState(null)
  const [currentWeather, setCurrentWeather] = useState(null)
  const [unitsSystem, setUnitsSystem] = useState('metric')

  //Utilisation du Hook useEffect, pour demander la permission d'accèder  à la localisation
  useEffect(() => {
    load()
  }, [])

  async function load() {
    try {
      let { status } = await Location.requestForegroundPermissionsAsync()

      if (status != 'granted') {
        setErrorMessage(
          "Il faut une autorisation de localisation pour accèder à l'application"
        )
        return
      }
      const location = await Location.getCurrentPositionAsync()

      const { latitude, longitude } = location.coords

      const weatherUrl = `${BASE_WEATHER_URL}lat=${latitude}&lon=${longitude}&units=${unitsSystem}&appid=${WEATHER_API_KEY}&lang=Fr`

      const response = await fetch(weatherUrl) // Cela va créer la requête

      //Check si la réponse est ok
      if (response.ok) {
        const result = await response.json() //ça prend la constante réponse et transforme l'appel API en .JSON
        setCurrentWeather(result)
      } else {
        setErrorMessage(result.message)
      }
    } catch (error) {
      setErrorMessage(error.message)
    }
  }

  //Verification de l'implantation API
  if (currentWeather) {
    const {
      main: { temp },
    } = currentWeather
    return (
      <View style={styles.container}>
        <StatusBar style="auto" />
        <View view style={styles.main}>
          <View style={styles.searchStyle}>
            <Search />
          </View>
          <ReloadIcon load={load} />
          <WeatherInfo currentWeather={currentWeather} />
        </View>
        <WeatherDetails
          currentWeather={currentWeather}
          unitsSystem={unitsSystem}
        />
      </View>
    )
  } else {
    return (
      <View style={styles.container}>
        <Text style={styles.errorInternetMessage}>
          {
            'Impossible de récupérer les données météo, veuillez vérifier votre connexion Internet'
          }
        </Text>
        <Text style={styles.errorMessageStyle}>{errorMessage}</Text>

        <StatusBar style="auto" />
      </View>
    )
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1, //flex tout l'espace
    justifyContent: 'center',
  },
  searchStyle: {
    textAlign: 'center',
  },
  main: {
    justifyContent: 'center',
    flex: 1,
  },
  errorMessageStyle: {
    fontSize: 10,
    textAlign: 'center',
  },

  errorInternetMessage: {
    textAlign: 'center',
    paddingLeft: 20,
    paddingRight: 20,
    marginBottom: 10,
  },
})
