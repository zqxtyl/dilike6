import request from '@/utils/request'
import requestarr from '@/utils/piction'
// 登录
export const login = data => {
  return request({
    url: '/api/user-service/user/login',
    method: 'post',
    data
  })
}
// 验证码
export const yanzm = (clientToken) => {
  return requestarr({
    url: `/api/user-service/user/imageCode/${clientToken}`
  })
}
