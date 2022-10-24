function sumArray(array) {
   if(array.length >= 2){
    return  array.sort((a, b) => a - b).slice(1, array.length -1).reduce((acc, item) => acc + item);
   }else if(array.length == 0){
    return 0;
   }else if(array === object){
    return 0
   }
}

console.log(sumArray('null'));


let a = 0;

console.log(typeof a);