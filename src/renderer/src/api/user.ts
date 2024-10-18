import request from '../utils/request'
export const getData = (data: object) => {
  return request({
    url: '/getCompanyId',
    method: 'get',
    data
  })
}
