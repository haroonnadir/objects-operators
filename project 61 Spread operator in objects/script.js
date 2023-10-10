const originalObject = { a: 1, b: 2 };
const copiedObject = { ...originalObject };
console.log(copiedObject); // Output: { a: 1, b: 2 }

const additionalProperties = { c: 3, d: 4 };
const mergedObject = { ...originalObject, ...additionalProperties };
console.log(mergedObject); // Output: { a: 1, b: 2, c: 3, d: 4 }
