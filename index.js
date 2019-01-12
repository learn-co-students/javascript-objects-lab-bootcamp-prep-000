var recipes = {typeof:'object'}
function updateObjectWithKeyAndValue(obj,key,value)
{
obj[key]='value'
return obj
}
var obj={'prop1':'1'}
updateObjectWithKeyAndValue(obj, 'prop2', 2)

