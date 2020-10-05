const { REACT_APP_API: API_URL } = process.env

const trimSlash = str => str.replace(/^\/|\/$/g, '')

export const getUrl = uri => `${trimSlash(API_URL || '')}/${trimSlash(uri)}`
