export const register = (key, value) =>
  localStorage.setItem(key, JSON.stringify(value))

export const getter = key => JSON.parse(localStorage.getItem(key)) || ''

export default null
