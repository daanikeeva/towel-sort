
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (matrix === undefined) {
     return []
  }
  else {
     const resArr = [];
     matrix.forEach((el, ind) => {
        if ((ind + 1)%2 == 0) {
           el.reverse().forEach(elem => {
              resArr.push(elem)
            })
         }
         else {
            el.forEach(elem => {
               resArr.push(elem)
            })
         }
      })
      return resArr;
   }
}
