const union = require("../index");
var assert = require("assert");

describe("Object Union", function () {
  it("should merge objects non destructively", () => {
    const obj1 = { a: "", b: "BB" };
    const obj2 = { a: "AA", b: "" };

    const res = union(obj1, obj2);
    assert.deepEqual(res, { a: "AA", b: "BB" });
  });

  it("should prefer object value from later object over previous object", () => {
    const obj1 = { a: "first" };
    const obj2 = { a: "second" };

    const res = union(obj1, obj2);
    assert.deepEqual(res, { a: "second" });
  });

  it("should merge n objects", () => {
    const obj1 = { a: "first" };
    const obj2 = { b: "second" };
    const obj3 = { c: "third" };

    const res = union(obj1, obj2, obj3);
    assert.deepEqual(res, { a: "first", b: "second", c: "third" });
  });

  it("should merge objects with any depth", () => {
    const obj1 = {
      prop: { a: 1, b: 2 },
    };
    const obj2 = {
      prop: { a: 2, c: 3 },
    };
    const res = union(obj1, obj2);
    assert.deepEqual(res, { prop: { a: 2, b: 2, c: 3 } });
  });

  it("should prefer later object as correct values even if types change", () => {
    const obj1 = {
      prop: { a: 1, b: 2 },
    };
    const obj2 = {
      prop: "PROP",
    };
    const res = union(obj1, obj2);
    assert.deepEqual(res, { prop: "PROP" });
  });
});
