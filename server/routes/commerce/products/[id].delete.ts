export default defineEventHandler(async(event) => {

  const id = getRouterParam(event, 'id')
  
  const isProductExist = await useStorage('db').hasItem(id)

  if (!isProductExist) {
    throw createError({
      statusCode: 404,
      statusMessage: "Product not found",
      message: `Product with id ${id} not found`,
    })
  } else {
    await useStorage('db').removeItem(id)
    return { message: `Product with id ${id} deleted` }
  }
  
})
