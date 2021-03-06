import request from '@/utils/request'

// 查询用户列表
export function listUser(query) {
  return request({
    url: '/user/user/list',
    method: 'get',
    params: query
  })
}

// 查询用户详细
export function getUser(userId) {
  return request({
    url: '/user/user/' + userId,
    method: 'get'
  })
}

// 新增用户 一堆注释 去强制更新
export function addUser(data) {
  return request({
    url: '/user/user',
    method: 'post',
    data: data
  })
}

// 修改用户
export function updateUser(data) {
  return request({
    url: '/user/user',
    method: 'put',
    data: data
  })
}

// 删除用户
export function delUser(userId) {
  return request({
    url: '/user/user/' + userId,
    method: 'delete'
  })
}

// 导出用户
export function exportUser(query) {
  return request({
    url: '/user/user/export',
    method: 'get',
    params: query
  })
}
