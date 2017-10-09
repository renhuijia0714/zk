//1.编写一段数组去重代码要求至少使用两种方法
//第一种
var arr = [1,2,3,4,5,6,6,3,4];
function removeSame(arr){
    var newArr = [];
    for(var i=0;i<arr.length;i++){
        if(newArr.indexOf(arr[i])!==-1){
            newArr.push(arr[i])
         }
      }
    return newArr;
}
removeSame(arr)