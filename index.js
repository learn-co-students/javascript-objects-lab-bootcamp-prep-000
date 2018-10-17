var recipes = {
  key: "value"
}

function updateObjectWithKeyAndValue(playlist, artist, song){
  var newPlay = Object.assign({}, playlist)
}

function updateObjectWithKeyAndValue(playlist, artist, song){
  return Object.assign({}, playlist, { [artist]: song })
}

function destructivelyUpdateObjectWithKeyAndValue(playlist, artist, song){
  playlist[artist] = song
  return playlist
}

function deleteFromObjectByKey(playlist, artist){
var newplaylist = Object.assign({}, artist)
    delete playlist.artist
    return newplaylist
}

function destructivelyDeleteFromObjectByKey(playlist, artist){
  delete playlist[artist]
  return playlist
}