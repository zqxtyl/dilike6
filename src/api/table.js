import request from '@/utils/request'
import store from '@/store'
// 工单管理
export const getList = () => {
  return request({
    url: '/api/task-service/task/allTaskStatus',
  })
}
// 订单管理
export const getDD = (params) => {
  return request({
    url: '/api/order-service/order/search',
    params,

  })
}
