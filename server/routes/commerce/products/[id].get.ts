export default defineEventHandler(async (event) => {

  const id = getRouterParam(event, 'id')

  const product = await useStorage('db').getItem(id)

  if ( !product?.id) {
    throw createError({
      statusCode: 404,
      statusMessage: "Product not found",
      message: `Product with id ${id} not found`,
    })
  }
  else {
    return product
  }

})
