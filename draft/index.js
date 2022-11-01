{const arr = [12, -4, 32, -5, 34, -23, 5];

function arrFilter (arr) {
   return arr.filter((item) => item > 0)
}
  



console.log(arrFilter([12, -4, 32, -5, 34, -23, 5]));}


function handler(num, arr){
    if(num > 0){
        return arr.filter((item) => item > 0)
    }else{
        return arr.filter((item) => item < 0)
    }
}




const handler = (num, arr) => num > 0 ? arr.filter((item) => item > 0) : arr.filter((item) => item < 0)

console.log(handler(2,[-1,-2,-3,1,2,3]))