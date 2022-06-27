import chalk from 'chalk'
import dedent from 'dedent-js'
import { convertPressure } from '../helpers/convertPressure.js'

export const printError = error => {
  console.log(`${chalk.bgRed('ERROR')} ${error}`)
}

export const printSuccess = msg => {
  console.log(`${chalk.bgGreen('SUCCESS')} ${msg}`)
}

export const printHelp = () => {
  console.log(dedent`${chalk.bgCyan('HELP')} 
  Без параметров - вывод погоды
  -s [CITY] - для установки города
  -h - для вывода помощи
  -t [API_KEY] - для сохранения токена
  `)
}

export const printWeather = (response, icon) => {
  console.log(dedent`${chalk.bgMagenta(' WEATHER ')} Погода в городе ${
    response.name
  }
  ${icon}  ${response.weather[0].description}
  Температура: ${response.main.temp} °C (ощущается как ${
    response.main.feels_like
  } °C)
  Влажность: ${response.main.humidity}%
  Скорость ветра: ${response.wind.speed} м/с
  Давление: ${convertPressure(response.main.pressure)} мм рт.ст.
  `)
}
