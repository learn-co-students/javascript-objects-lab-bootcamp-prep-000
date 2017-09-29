var recipes = {
  1: "cake"
}

function updateObjectWithKeyAndValue( obj, key, val ) {
  return Object.assign( {}, obj, { [key] : val } )
}

function destructivelyUpdateObjectWithKeyAndValue( obj, key, val ) {
  obj[key] = val
  return obj
}

function deleteFromObjectByKey( obj, key, val ) {
  var new_obj = Object.assign( {}, obj )
  delete new_obj[key]
  return new_obj
}

function destructivelyDeleteFromObjectByKey( obj, key ) {
  delete obj[key]
  return obj
}
