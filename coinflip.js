// didn't use google at all :b
function randomNumber(n = 1000000){

  function flip() {
    return Math.random() >= 0.5;
  }
  
  function trimNumber(arrNumber, n2){
    if(parseInt(arrNumber.join('')) >= n2){
      arrNumber.splice(0);
      trimNumber(arrNumber, n2)
    }
    if( isNaN(parseInt(arrNumber.join('')))){
      return 0;
    }
    else{
      return parseInt(arrNumber.join(''));
    }
  }

  if(n >= 100000 || n === 0) {
    throw new Error('provide a number greater than 0 and less than 100000');
  }

  const numberLength = n.toString().length;

  const number = [];
  for(i=0; i < numberLength; i+=1){
    if(flip()){
      baseRandom: 
        for(i=1; i < 10; i += 1){
          if(flip()){
            number.push(i)
            break baseRandom;
          }
        }
    }
  }

  if(parseInt(number.join('')) >= n ){
    number.slice(0);
  }

  let trimmed = trimNumber(number, n)
  return trimmed;
}

module.exports = randomNumber;


