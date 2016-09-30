var recipes = {
  eggs: "2",
  flour: "1 cup",
  water: "2 cups"
}

function updateObjectWithKeyAndValue(object, key, value) {
return Object.assign({}, object, { [key]: value })
}

function destructivelyUpdateObjectWithKeyAndValue(recipes, key, value) {
recipes[key] = value;
return recipes;
}

function deleteFromObjectByKey(object, key) {
var secondObject = Object.assign({},[key])

delete secondObject[key];
return secondObject;
}

function destructivelyDeleteFromObjectByKey(object, key) {
delete object[key];
return object;
}
