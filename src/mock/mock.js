import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'

export default {
  setup () {
    let mock = new MockAdapter(axios)
    // 拦截登陆请求
    mock.onPost('/login').reply(config => {
      let { username, password } = JSON.parse(config.data)
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          if (username === 'admin' && password === 'admin') {
            resolve([200, { code: 200, msg: '登陆成功', token: 'admin' }])
          } else {
            resolve([200, { code: 500, msg: '账号或密码错误' }])
          }
        }, 1000)
      })
    })
  }
}
