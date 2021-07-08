var recipes = {}

function updateObjectWithKeyAndValue( object, key, value ) {
  return Object.assign({ [key]: value }, object )
}

function destructivelyUpdateObjectWithKeyAndValue( object, key, value ) {
  return Object.assign( object, { [key]: value })
}

function deleteFromObjectByKey( object, key ) {
  var returnObject = Object.assign( {}, object )
  delete returnObject[key]
  return returnObject
}

function destructivelyDeleteFromObjectByKey( object, key ) {
  delete object[key]
  return object
}
