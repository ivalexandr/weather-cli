import axios from 'axios'
import { getKeyValue, SETTINGS } from './storage.service.js'

export const getIcon = icon => {
  const icons = {
    '01': '☀️',
    '02': '🌤️',
    '03': '☁️',
    '04': '☁️',
    '09': '🌧️',
    10: '🌦️',
    11: '🌩️',
    13: '❄️',
    50: '🌫️',
  }
  return icons[icon.slice(0, -1)]
}

export const getWeather = async () => {
  const token = await getKeyValue(SETTINGS.token)
  const city = await getKeyValue(SETTINGS.city)
  if (!token) {
    throw new Error('Не задан ключ API, задайте его через команду -t [API_KEY]')
  }
  const { data } = await axios.get(
    'https://api.openweathermap.org/data/2.5/weather',
    {
      params: {
        q: city,
        appid: token,
        lang: 'ru',
        units: 'metric',
      },
    }
  )
  return data
}
