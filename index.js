//var meals = { breakfast: "oatmeal" };

//var recipes = {kale: "1 cup", sausage: "1 lb", potatoes: "1 lb", coconut milk: "2 cups"}

var recipes={}

function updateObjectWithKeyAndValue(object, key, value){
  return Object.assign({}, object, { [key]: value })
}

function deleteFromObjectByKey(object, key) {
  return Object.assign({}, delete object.key)
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object[key]=value
  return object
}

function destructivelyDeleteFromObjectByKey(object, key){
  delete object[key]
  return object
}
