export default defineEventHandler(async (event) => {

  const { bodyCount } = await readBody(event);
   const reaction = bodyCount > 5 ? '🥵' : '🍑';

  return {
    message: 'POST test is done',
    reaction
  };
});
