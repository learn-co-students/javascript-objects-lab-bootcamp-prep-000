var recipes = {};

function updateObjectWithKeyAndValue(object, key, value){
  var newObject = Object.assign({}, object);
  newObject.key = value;
  return newObject;
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){

}
