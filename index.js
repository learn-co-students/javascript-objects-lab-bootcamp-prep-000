var recipes = {typeof:'object'}
function updateObjectWithKeyAndValue(object,key,value)
{
  var obj=Object.assign({}, obj)
object[key]='value'
return obj
}
obj={'prop1':1}
updateObjectWithKeyAndValue(obj, 'prop2', 2)

