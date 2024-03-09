 const getData = new Promise((resolve, reject) =>{
   //  resolve(54565);
   // reject('NO Data Available')


   const num = Math.random()* 10;
   console.log('Random number', num);

   if(num < 5 ){
      resolve(54565);
   }
   else{
      reject('NO Data Available')
   }
 })


getData
   .then(data => console.log('Result', data))
   // .then(data => console.log(data + 54))
   .catch(err => console.log('ERR: ', err))

//  console.log(getData + 54)