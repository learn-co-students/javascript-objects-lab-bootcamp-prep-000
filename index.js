var recipes = { prop: 1};

function updateObjectWithKeyAndValue(obj, key, value){
  
  var recipes = { prop: 1, prop2: 2 };
  return recipes;
  
}

updateObjectWithKeyAndValue(recipes, prop2, 2);


function destructivelyUpdateObjectWithKeyAndValue(obj, key, value){
  
  obj.prop2 = value;
  return obj;
  
}

destructivelyUpdateObjectWithKeyAndValue(recipes, prop2, 2);


function deleteFromObjectByKey(obj, key){
  
  var obj = { 'prop': 1 };
  var newObj = Object.assign({}, obj);
  delete newObj.prop;
  
  return newObj;
  
}

deleteFromObjectByKey(obj, 'prop');



function destructivelyDeleteFromObjectByKey(obj, key){
  
  
  
  
  delete obj.prop;
  
  
  return obj;
  
}

destructivelyDeleteFromObjectByKey(obj, prop);