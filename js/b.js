//1.编写一段数组去重代码要求至少使用两种方法
//第二种
var arr = ["a","d","v","d","g","a"];
function removeSame(arr){
  var arb = arr.join().reverse().split();
    var newArr = [];
    arb.forEach(function(val,i){
        if(newArr.indexOf(val)!==-1){
           newArr.unshift(val)
        }
    })
    return newArr;
}
removeSame(arr)