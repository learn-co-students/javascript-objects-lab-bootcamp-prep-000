var recipes = {typeof:'object'}
function updateObjectWithKeyAndValue(object,key,value)
{
object[key]='value'
return object
}
var obj={'prop1':'1'}
updateObjectWithKeyAndValue(obj, 'prop2', 2)

