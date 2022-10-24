function enough(cap, on, wait) {
   let sum = cap - on;
   
    if(sum >= wait){
      return 0
    }else {
     return wait - sum
    }
  }

  console.log(enough(20, 20, 5));