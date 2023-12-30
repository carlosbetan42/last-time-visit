const db = await Deno.openKv();

// const user = 'betan';
// const result = await db.set(['username'], user);
// console.log(result);
// const username = await db.get(['username']);
// console.log(username);

// const result = await db.set(['counter'], 0);
// const { value } = await db.get<number>(['counter']);
// console.log(value);
// const newCounter = value == null ? 0 : value + 1;

// const result = await db.set(['counter'], newCounter);
// console.log(result);

// // await db.set(['visits'], new Deno.KvU64(0n)); // 0n bigint
// await db.atomic().sum(['visits'], 1n).commit();
// const result = await db.get<Deno.KvU64>(['visits']);
// console.log(result);

// const facundoPreferences = {
//   username: 'facundoCapua',
//   theme: 'dark',
//   language: 'es-MX'
// };

// const miduPrefences = {
//   username: 'midudev',
//   theme: 'dark',
//   language: 'es-MX'
// };

// await db.set(['preferences', 'facundo'], facundoPreferences);
// await db.set(['preferences', 'midudev'], miduPrefences);

// const miduPrefences = await db.get(['preferences', 'facundo']);
// const betanPreferences = await db.get(['preferences', 'midudev']);

// console.log(miduPrefences);
// console.log(betanPreferences);

// const [facundoPreferences, miduPreferences] = await db.getMany([
//   ['preferences', 'facundo'],
//   ['preferences', 'midudev']
// ]);

const entries = db.list({ prefix: ['preferences'] });

for await (const entry of entries) {
  console.log(entry);
}

await db.delete(['preferences', 'facundo']);

// console.log(facundoPreferences);
// console.log(miduPreferences);
