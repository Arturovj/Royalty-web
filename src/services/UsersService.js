import createHttp from './BaseService'

const http = createHttp(true)

export const getCurrentUser = () => http.get('/users/me')

export const getUserDetail = (id) => http.get(`/users/${id}`)

export const getAllUsers = () => http.get('/users')

export const updateUser = (id, data) => http.patch(`/users/${id}`, data)