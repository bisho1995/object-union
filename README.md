# Object Union

Merge two or more objects non-destructively.

## Rules

1. Merge two or more objects in such a way that if a property existed in previous object but absent in new object then that property will be preserved.
2. If a property is there in previous object and also there in next object then resultant object will have value of the latest object.
3. Recursively merge nested objects

## Usage

```
const union = require("object-union");

const obj1 = { a: "", b: "BB" };
const obj2 = { a: "AA", b: "" };

const res = union(obj1, obj2);
console.log(res)
```

Output will be

```
{ a: "AA", b: "BB" }
```

Merging nested objects

```
const obj1 = {
    prop: { a: 1, b: 2 },
};
const obj2 = {
    prop: { a: 2, c: 3 },
};

const res = union(obj1, obj2);
console.log(res)
```

Output will be

```
{ prop: { a: 2, b: 2, c: 3 } }
```
