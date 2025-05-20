export default defineEventHandler((event) => {

  const { href } = getRequestURL(event);

  console.log('Request URL:', href);
  
})
