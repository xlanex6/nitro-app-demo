export default defineEventHandler(async (event) => {

  const id = getRouterParam(event, 'id')

  const product = await useStorage('db').getItem(id)

  if (!product?.id) {
    throw createError({
      statusCode: 404,
      statusMessage: "Product not found",
      message: `Product with id ${id} not found`,
    })
  } else {
    const body = await readBody(event)
    await useStorage('db').setItem(id, { ...(product as Object), ...body })

    return { ...(product as Object), ...body, message: `Product with id ${id} updated` }

  }


})
