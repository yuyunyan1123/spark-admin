import request from '@/utils/request'

export function listData(params) {
  return request({
    url: '/admin/user/page',
    method: 'post',
    params
  })
}

export function createUser(params) {
  return request({
    url: '/admin/user/save',
    method: 'post',
    data: params
  })
}

export function updateUser(params) {
  return request({
    url: '/admin/user/update',
    method: 'post',
    data: params
  })
}

export function deleteUser(id) {
  return request({
    url: `/admin/user/delete/${id}`,
    method: 'delete'
  })
}
