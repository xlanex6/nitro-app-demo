export default defineEventHandler((event) => {

  const headers = getRequestHeaders(event);

  if (headers['x-b3'] !== 'dev') {
    setResponseStatus(event, 401);
    return { message: 'Unauthorized' };
  }
  
})
