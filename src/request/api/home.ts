import service from '../request'

export const homeData = (params: object) => {
  return service({
    url: '/getlist',
    method: 'get',
    params
  })
}
