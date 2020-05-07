// @ts-ignore
function unionObject(...args: any[]) {
  const notObjects = args.filter(
    (o) => typeof o !== "object" || Array.isArray(o)
  );

  if (!args.length) return {};

  if (notObjects.length)
    throw new Error(
      "All the parameters should be an object. Non objects and arrays are not permitted"
    );

  const finalOjb = args.reduce((acc, obj) => {
    const keys = Object.keys(obj);

    keys.forEach((key) => {
      let val;
      if (typeof obj[key] === "object" && typeof acc[key] === "object") {
        val = unionObject(acc[key], obj[key]);
      } else {
        val = obj[key] || acc[key];
      }
      acc[key] = val;
    });

    return acc;
  }, {});

  return finalOjb;
}

module.exports = unionObject;
