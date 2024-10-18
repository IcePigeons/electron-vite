import request from '../utils/request'
export const getData = (data: any) => {
  return request({
    url: '/getCompanyId',
    method: 'get',
    data
  })
}
