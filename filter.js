function oddIntegers(numbers) {
  // const odds = [];
  
  const odds = numbers.filter(function(item){
     return item % 2 === 1 
  })
  return odds

  } 
    
  
 
  // return odds;


function longStrings(strings, minimumLength) {
  // const longs = [];

  // for (let i = 0; i < strings.length; i++) {
  //   if (strings[i].length >= minimumLength) {
  //     longs.push(strings[i]);
  //   }
  // }

   const longs = strings.filter(function(item){
     return item.length >= minimumLength
   })
   return longs
   


  // return longs;
}

function getNotEmptyPhoneNumbers(phoneNumbers) {
  // const notEmpty = [];

  // for (let i = 0; i < phoneNumbers.length; i++) {
  //   if (phoneNumbers[i].phone !== undefined) {
  //     notEmpty.push(phoneNumbers[i]);
  //   }
  // }

  // return notEmpty;


  const notEmpty = phoneNumbers.filter(function(item){
    return item.phone !== undefined
  })
   
  return notEmpty
   
}
