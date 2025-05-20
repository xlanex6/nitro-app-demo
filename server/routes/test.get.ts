export default defineEventHandler((event) => {
  

  const query = getQuery(event); 

  const reaction = query.cool === 'true' ? '🤩' : '😢'

  //  cool === true
  if (query.cool === 'true') {
    return { reaction, query, test: true }
  } else {
    // throw createError({
    //   statusCode: 401,
    //   statusMessage: 'Unauthorized',
    //   message: 'You are not authorized to access this route'
    // });
    setResponseStatus(event, 401);

    return { degage : true }
  }
  // cool === false
  // ERROR 401 Unauthorized


});

// http GET: 3000 / test q==batman cool == true

// http://localhost:3000/test?q=batman&cool=true
