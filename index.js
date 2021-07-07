var recipes = {
  breakfast: "tamato",
  lunch: "rice"
}


function updateObjectWithKeyAndValue(object, key, value){
  return Object.assign({}, object, {[key]: value});
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object[key] = value;
  return object;
}

function deleteFromObjectByKey(object, key){
  var ob1 = Object.assign({}, object);
  delete ob1[key];
  return ob1;
}

function destructivelyDeleteFromObjectByKey(object, key){
  delete object[key];
  return object;
}

console.log(updateObjectWithKeyAndValue(recipes, "dinner", "chicken"));
console.log(destructivelyUpdateObjectWithKeyAndValue(recipes, "dinner", "chicken"));

console.log(deleteFromObjectByKey(recipes, "dinner"));
console.log(recipes);
