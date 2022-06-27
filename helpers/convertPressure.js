export const convertPressure = pressure => {
  const pressurePa = pressure * 100
  return Math.floor(pressurePa * 7.50062e-3)
}
