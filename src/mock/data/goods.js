import Mock from 'mockjs'

export const mkGoods = (count) => {
  let goods = []
  console.log(count)
  for (let i = 0; i < count; i++) {
    goods.push(Mock.mock({
      code: Mock.Random.string('number', 9),
      name: Mock.Random.ctitle(2, 30),
      unit: Mock.Random.cword('个瓶袋件'),
      cost: Mock.Random.float(0, 99999, 0, 2),
      price: Mock.Random.float(0, 99999, 0, 2),
      procducing: Mock.Random.city(),
      brand: Mock.Random.first(),
      prov_code: Mock.Random.integer(100001, 105000),
      status: '新品'
    }))
  }
  return goods
}
