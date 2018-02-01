recipes = {};

function updateObjectWithKeyAndValue(object, key, value){
  return Object.assign({}, object, {[key]: value});
}
function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object[key] = value;
  return Object;
}
function deleteFromObjectByKey(object, key){

}
function destructivelyDeleteFromObjectByKey(object, key){

}



// playlist = { Kanye: "Gold Digger" };
//
// function updatePlaylist(playlist, artistName, songTitle){
//   return Object.assign({}, playlist, {[artistName]: songTitle});
// }
// function removeFromPlaylist(playlist, artistName){
//   temp = Object.assign({}, playlist);
//  delete temp[artistName];
//  return temp;
// }
