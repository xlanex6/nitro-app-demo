export default defineEventHandler(async (event) => {
  console.time('products')
  const { count } = getQuery(event)
  let itemCounter = 20
  if (Boolean(count)) {
    itemCounter =  Number(count)
  }

  await useStorage('db').clear()
   
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
      },
      id: $faker.string.uuid()
    }
  }

  const products = Array.from({ length: itemCounter }, fakeProduct)

  const productToDb = products.map((product) => {
    return {
      key: product.id,
      value: {
        ...product
      }
    }
  })

  await useStorage('db').setItems(productToDb)

  console.timeEnd('products')

  return {
    products
  }

  })  
