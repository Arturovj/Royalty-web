import createHttp from './BaseService'

const http = createHttp(true)

export const getCurrentUser = () => http.get('/users/me')

export const updateUser = (id, data) => http.patch(`/users/${id}`, data)