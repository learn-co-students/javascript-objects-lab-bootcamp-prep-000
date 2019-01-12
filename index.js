var recipes = {typeof:'object'}
function updateObjectWithKeyAndValue(object,key,value)
{
  
object[key]='value'
var obj=object.assign({},object,{'key':'value'})
return obj
}
