var recipes = new Object();

function updateObjectWithKeyAndValue(object,mykey,value)
{

  return  Object.assign( object, {[mykey]:value});
}

function destructivelyUpdateObjectWithKeyAndValue(object,key,value)
{
 object[key] = value;
 return object;
}


function deleteFromObjectByKey(object,key)
{
  var temp = Object.assign(object);
  delete temp.key
  return temp


}

function destructivelyDeleteFromObjectByKey(object,key)
{
  delete object.key
  return object
}
