export default defineTask({
  meta: {
    name: "gen",
    description: "Cleanning DB",
  },
  async run({ payload, context }) {
    await useStorage("db").clear();
    console.log("DB is clear");
    return { result: "DB is clear" };
  },
});
