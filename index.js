var recipes = new Object({})

function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, object, {[key]: value })
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) { 
  object[key] = value
  
  return object
  
}
function updatePlaylist(playlist, artistname, songtitle) {
  playlist[artistname] = songtitle
  return playlist
}

function deleteFromObjectByKey(object, key) {
  var newobj = Object.assign({}, [key])
  delete newobj.key
  return newobj
  
}

function destructivelyDeleteFromObjectByKey(object, key) {
  
  delete object[key]
  return object
  
}
