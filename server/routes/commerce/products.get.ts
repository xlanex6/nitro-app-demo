export default defineEventHandler(async (event) => {
  
  const { count, offset } = getQuery(event)
  let itemCounter = Number(count) || 20

  const keys = await useStorage('db').getKeys()

  const keyList = keys.slice(Number(offset) + 1, Number(offset) + 1  + itemCounter)

  const products = await useStorage('db').getItems(keyList)

  return products.map((product) => product.value )

})
