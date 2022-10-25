{function enough(cap, on, wait) {
   let sum = cap - on;
   
    if(sum >= wait){
      return 0
    }else {
     return wait - sum
    }
  }

  console.log(enough(20, 20, 5));
}

{
function makeNegative(num) {
 
   return num <= 0 ? num : num * -1
 }

 console.log(makeNegative(7));}



 {const makeUpperCase = (str) => str.toUpperCase()}



{const findAverage = (array) => array.length === 0 ? 0 : array.reduce((acc, item) => acc + item )/array.length;
  // your code here
  
console.log(findAverage([]));}