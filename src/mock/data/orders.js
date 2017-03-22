import Mock from 'mockjs'

export const mkOrders = (count) => {
  let orders = []
  console.log(count)
  for (let i = 0; i < count; i++) {
    orders.push(Mock.mock({
      id: 'DH0000-00' + Mock.Random.string('number', 4),
      prov_code: '100' + Mock.Random.string('number', 3),
      cont_code: 'ZY100001-0' + Mock.Random.string('number', 3),
      cdate: Mock.Random.datetime(),
      send_date: Mock.Random.datetime(),
      busdate: Mock.Random.datetime(),
      depart: '000011' + Mock.Random.string('number', 3)
    }))
  }
  return orders
}
