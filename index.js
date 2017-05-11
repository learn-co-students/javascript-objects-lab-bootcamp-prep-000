var recipes = {apples: 10 };
function destructivelyUpdateObjectWithKeyAndValue (obj, key, value) { obj[key]= value
return obj
}
destructivelyUpdateObjectWithKeyAndValue (recipes, "flour", "2 cups")
Object.assign ({ apples: 10}, {flour: "2 cups"})
Object.assign ({ oatmeal: "3 cups"}, {apricots: 15}, {flour; "3 cups"})
function updateObjectWithKeyAndValue(obj, key, value) {
 return Object.assign({}, obj, { [key]: value })
}
