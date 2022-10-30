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

{function twiceAsOld(dadYearsOld, sonYearsOld) {
  return Math.abs(dadYearsOld - sonYearsOld * 2 )
} 
console.log(twiceAsOld(36,7));}

{const maps = (x) => x.map((item) => item * 2)}


const  basicOp = (operation, value1, value2) => {

  return  value1 + operation.replace('') + value2
}
console.log(basicOp('+',2,2));


{function cockroachSpeed(s) {
  return +Math.floor(s * 27.7778)
}

console.log(cockroachSpeed(1.08));}


{const include = (arr, item) => {
    const check = arr.find((elem) => elem === item) 
          return check === item ? true : false
}
console.log(include([1, 2, 3], 1));  }


{function sum (numbers) {
if(numbers[0] == undefined){
  return 0
}else if( typeof numbers[0] === typeof number){
  return Math.abs(numbers.toString())
}else {
  return numbers.reduce((acc, item) => acc + item)
}
};
console.log(sum([0]));
}
 
function task () {
  const strArr = ['H','e','l','l','o'];
  // const stmap = strArr.
  return strArr.length
}

{const summation = (num) => {
  let sum = 0;
  for(let i = 0; i <= num; i++){
  
    sum+=i
  }return sum
 }

 console.log(summation(2));}

 
 
 function shortcut (string) {
  
}

// function modifyMultiply (str,loc,num) {
//   //Code here
//   let toArr = str.split(' ')
//    console.log(toArr[loc].repeat(num));
//   } 
//  modifyMultiply("Everything happening around me is very random. I am enjoying the phase, as the journey is far more enjoyable than the destination.",2,5)



// const arr = N => N-=1


//  console.log(arr(5));

//  let rec = 'abc';
//  console.log(Array.from(rec));


{function sameCase(a, b){
  if(typeof a != typeof b){
    return -1
  }else if(a === b){
    return 1
  }else{
    return 0
  }
}

console.log(sameCase('a', '8'));
}

function typeOfSum(a, b) {
 let с = a + b;
  
 return c
}

console.log(typeOfSum(1,'a'));