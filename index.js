var recipes = {
  key : "value"
};

function updateObjectWithKeyAndValue(object, key, value) {
   var newObj = Object.assign({}, object, { [key]: value })
  return newObj
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value
  return object
  
}

function deleteFromObjectByKey(object, key) {
object = {key : ''};
var newwJob = object
delete newwJob.key
return newwJob
}

function destructivelyDeleteFromObjectByKey(object, key) {

delete object[key]
return object

}


