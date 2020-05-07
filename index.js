function unionObject() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var notObjects = args.filter(function (o) { return typeof o !== "object" || Array.isArray(o); });
    if (!args.length)
        return {};
    if (notObjects.length)
        throw new Error("All the parameters should be an object. Non objects and arrays are not permitted");
    var finalOjb = args.reduce(function (acc, obj) {
        console.log({acc})
        var keys = Object.keys(obj);
        keys.forEach(function (key) {
            var val;
            if (typeof obj[key] === "object" && typeof acc[key] === "object") {
                val = unionObject(acc[key], obj[key]);
            }
            else {
                val = obj[key] || acc[key];
            }
            acc[key] = val;
        });

        return acc
    }, {});
    return finalOjb;
}
var obj1 = { a: "", b: "b1" ,d: {a:1,b:2}}, obj2 = { a: "a", b: "", c: "CC",d: {b:3,d:1} };
console.log(unionObject(obj1, obj2));
