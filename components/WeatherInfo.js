import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import { colors } from '../utils/index.js'

const { PRIMARY_COLOR, SECONDARY_COLOR } = colors

export default function WeatherInfo({ currentWeather }) {
  const {
    main: { temp },
    weather: [details], //Tableau
    name,
  } = currentWeather
  const { icon, main, description } = details

  const iconUrl = `http://openweathermap.org/img/wn/${icon}@4x.png`

  return (
    <View style={styles.weatherInfo}>
      <Text style={styles.weatherName}>{name}</Text>
      <Image style={styles.weatherIcon} source={{ uri: iconUrl }} />
      <Text style={styles.textPrimary}>{temp}°</Text>
      <Text style={styles.weatherDesc}> {description}</Text>
      <Text style={styles.textSecondary}> {main}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  weatherName: {
    fontWeight: 'bold',
    fontSize: 20,
  },

  weatherInfo: {
    alignItems: 'center',
  },
  weatherDesc: {
    textTransform: 'capitalize',
  },
  weatherIcon: {
    width: 100,
    height: 100,
  },
  textPrimary: {
    fontSize: 40,
    color: PRIMARY_COLOR,
  },
  textSecondary: {
    fontSize: 20,
    color: SECONDARY_COLOR,
    fontWeight: '500',
    marginTop: 10,
  },
})
