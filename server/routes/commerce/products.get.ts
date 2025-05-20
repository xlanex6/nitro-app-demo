export default defineEventHandler(async (event) => {

  const { count } = getQuery(event)
  const itemCounter = parseInt(count) || 20
   
  const fakeProduct = () => {
    return {
      name: $faker.commerce.productName(),
      price: $faker.commerce.price(
        { min: 1, max: 999, dec: 2 }
      ),
      image: $faker.image.urlPicsumPhotos(),
      description: $faker.commerce.productDescription(),
      rating: {
        rate: $faker.number.int({ min: 1, max: 5 }),
        count: $faker.number.int({ min: 1, max: 1000 })
      }
    }
  }

  const products = Array.from({ length: itemCounter }, fakeProduct)

  return {
    products
  }

  })  
