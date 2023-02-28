import http from '../utils/request'


// 请求首页数据home.vue
export const getData = () => {
    // 返回一个promise对象
    return http.get('/home/getData')
}


// user.vue
export const getUser = (params) => {
    // 返回用户列表
    return http.get('/user/getUser', params)
}
export const addUser = (data) => {
    // 新增用户
    return http.post('/user/add', data)
} 
export const editUser = (data) => {
    // 修改用户
    return http.post('/user/edit', data)
} 
export const delUser = (data) => {
    // 删除用户
    return http.post('/user/del', data)
} 


// login
export const getMenu = (data) => {
    return http.post('/permission/getMenu', data)
}