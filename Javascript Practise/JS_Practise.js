/*
let myFun = (list1,list2) =>{
    list1 = list1.concat(list2)
    list1.sort(function(a,b){
        return a-b
    })
    return list1
}

let list1 = [1,2,4],list2 = [1,3,4]
let call = myFun(list1,list2)
console.log(call)
*/

var romanToInt = function (s) {
  let myMap = new Map([
    ["I", 1],
    ["V", 5],
    ["X", 10],
    ["L", 50],
    ["C", 100],
    ["D", 500],
    ["M", 1000],
  ]);
  let count = 0
  for (let i = 0; i < s.length; i++) {
    if(myMap.has(s[i])){
        count += myMap.get(s[i])
    }
  }
  console.log(count)
};

let s="MCMXCIV"
romanToInt(s)
//console.log(call)