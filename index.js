var recipes = {
  property: "Fuck this shit",
};


function updateObjectWithKeyAndValue(object, key, value) {
    var resultObj = Object.assign({}, recipes, { [key]: value });
    return resultObj;
}


function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
    object[key] = value;
    return object;
}

function deleteFromObjectByKey(object, key){
  var resultObj = new Object(object);
  delete resultObj[key];
  return resultObj;
}

function destructivelyDeleteFromObjectByKey(object, key){
  delete object[key];
  return object;
}
