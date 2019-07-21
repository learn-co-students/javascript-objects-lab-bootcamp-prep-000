var recipes = {food : 'pizza'};

function updateObjectWithKeyAndValue(obj, key, value){
    return Object.assign({}, obj,{[key]: value})
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object[key] = value;
  return object;
}

function deleteFromObjectByKey(object, key){
  var testObject = Object.assign({}, Object); //makes new object with passed on object info
  delete testObject[key]; //deletes key in clone object
  return testObject; //returns close object that has been modified
}

function destructivelyDeleteFromObjectByKey(object, key){
  delete object[key];
  return object;
}