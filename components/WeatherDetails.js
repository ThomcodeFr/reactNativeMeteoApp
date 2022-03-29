import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { colors } from '../utils/index.js'
import { FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons'

const { PRIMARY_COLOR, SECONDARY_COLOR, BORDER_COLOR } = colors

export default function WeatherDetails({ currentWeather, unitsSystem }) {
  const {
    main: { feels_like, humidity, pressure },
    wind: { speed },
  } = currentWeather

  // Au cas où l'utilisateur souhaite changer le système metric de la vitesse de vent par le systèm Impérial
  const windSpeed =
    unitsSystem === 'metric'
      ? `${Math.round(speed)} m/s`
      : `${Math.round(speed)}  miles/h`

  return (
    <View style={styles.WeatherDetails}>
      <View style={styles.WeatherDetailsRow}>
        <View
          style={{
            ...styles.WeatherDetailsBox,
            borderRightWidth: 1,
            borderRightColor: BORDER_COLOR,
          }}
        >
          <View style={styles.WeatherDetailsRow}>
            <FontAwesome5
              name="temperature-low"
              size={20}
              color={PRIMARY_COLOR}
            />
            <View style={styles.WeatherDetailsItems}>
              <Text>Ressenti :</Text>
              <Text style={styles.TextSecondary}>{feels_like}°</Text>
            </View>
          </View>
        </View>
        <View style={styles.WeatherDetailsBox}>
          <View style={styles.WeatherDetailsRow}>
            <MaterialCommunityIcons
              name="water"
              size={30}
              color={PRIMARY_COLOR}
            />
            <View style={styles.WeatherDetailsItems}>
              <Text>Humidité :</Text>
              <Text style={styles.TextSecondary}>{humidity} %</Text>
            </View>
          </View>
        </View>
      </View>
      <View
        style={{
          ...styles.WeatherDetailsRow,
          borderTopWidth: 1,
          borderColor: BORDER_COLOR,
        }}
      >
        <View
          style={{
            ...styles.WeatherDetailsBox,
            borderRightWidth: 1,
            borderRightColor: BORDER_COLOR,
          }}
        >
          <View style={styles.WeatherDetailsRow}>
            <MaterialCommunityIcons
              name="weather-windy"
              size={20}
              color={PRIMARY_COLOR}
            />
            <View style={styles.WeatherDetailsItems}>
              <Text>Vitesse Vent :</Text>
              <Text style={styles.TextSecondary}>{windSpeed}</Text>
            </View>
          </View>
        </View>
        <View style={styles.WeatherDetailsBox}>
          <View style={styles.WeatherDetailsRow}>
            <MaterialCommunityIcons
              name="speedometer"
              size={30}
              color={PRIMARY_COLOR}
            />
            <View style={styles.WeatherDetailsItems}>
              <Text>Pression :</Text>
              <Text style={styles.TextSecondary}>{pressure} hPa</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  WeatherDetails: {
    marginTop: 'auto',
    margin: 20,
    borderWidth: 1,
    borderColor: BORDER_COLOR,
    borderRadius: 10,
  },
  WeatherDetailsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  WeatherDetailsBox: {
    flex: 1,
    padding: 20,
  },
  WeatherDetailsItems: {
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
  TextSecondary: {
    fontSize: 15,
    color: SECONDARY_COLOR,
    fontWeight: '700',
    margin: 7,
  },
})
