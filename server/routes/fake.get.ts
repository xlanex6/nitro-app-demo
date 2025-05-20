export default defineEventHandler(async(event) => {

  const isbn = $faker.commerce.isbn()
  // await useStorage().setItem('test:foo', isbn)

  let p = await useStorage().getItem('test:foo')

  return {
    p, isbn
  }
  
})
