import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import {scmApp} from './data/scmApp.js'
import {mkGoods} from './data/goods.js'

export default {
  setup () {
    let mock = new MockAdapter(axios)
    // 拦截登陆请求
    mock.onPost('/login').reply(config => {
      let { username, password } = JSON.parse(config.data)
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          if (username === 'admin' && password === 'admin') {
            resolve([200, { code: 200, msg: '登陆成功', token: 'admin', menus: scmApp }])
          } else {
            resolve([200, { code: 500, msg: '账号或密码错误' }])
          }
        }, 1000)
      })
    })
    // 拦截商品查询
    mock.onPost('/getGoods').reply(config => {
      let { pageSize } = JSON.parse(config.data)
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve([200, {code: 200, goods: mkGoods(pageSize)}])
        }, 1000)
      })
    })
  }
}
