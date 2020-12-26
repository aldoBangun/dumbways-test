const isiArray = (a, b) => {
   const result = []
   let n = b - a
   
   for(let i=0; i<a; i++) {
      const newArray = []

      for(let j=0; j < b; j++) {
         newArray.push(n)
         n += 2 * a
      }
      
      result.push(newArray)
   }

   console.log(result)
}

isiArray(2, 2)