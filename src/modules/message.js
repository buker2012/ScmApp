// 单例可独立使用的ele-message组件
import { Message } from 'element-ui'

export default {
  box: null,
  show (msg, type) {
    this.close()
    this.box = Message({
      showClose: true,
      type: type,
      message: msg,
      duration: 0
    })
  },
  close () {
    if (this.box !== null) {
      this.box.close()
    }
  }
}
