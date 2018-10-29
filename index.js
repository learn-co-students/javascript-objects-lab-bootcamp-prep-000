var recipes = {
  base: 'Dough',
  topping: 'Pineapple',
  cheese: 'Mozzarella'
};

function updateObjectWithKeyAndValue(object, key, value) {
   object = {prop: 1, prop2: 2};
   return object;
}

 function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
   object[key] = value;
   return object;
 }

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key];
  return object;
}

function deleteFromObjectByKey(object, key) {
  var meals ={ prop1: 'prop2'}
  var meals2 = Object.assign({}, meals)

  delete meals2.object
  return meals
}

  
