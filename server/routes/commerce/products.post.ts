import { th, tr } from "@faker-js/faker"

export default defineEventHandler(async (event) => {
  
  const body = await readBody(event)

  try {
    const { description, name, price, rating, image } = body
    const id =  $faker.string.uuid()

      const resDB = await useStorage('db').setItem(id, { description, name, price, rating, image, id })

    return {
      name,
      price,
      rating,
      image,
      description,
      id,
      resDB
    }
    
  } catch (error) {
    throw createError({
      statusCode: 400,
      statusMessage: "Body is not valid",
      message: error,
    })
    
  }

  

})
