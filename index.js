var recipes = {};

function updateObjectWithKeyAndValue(obj, key, value) {

  return Object.assign({}, obj, { [key]: value })
};

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object[key]=value

  return object
};

function deleteFromObjectByKey(object, key){
    var newCats = Object.assign({},object);
    delete newCats[key];

    return newCats;


};

function destructivelyDeleteFromObjectByKey(object, key){
  delete object[key];
  return object;
};
