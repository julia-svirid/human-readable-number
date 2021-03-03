module.exports = function toReadable (num) {
  const obj = {
    "0": "",
    "1": "one",
    "2": "two",
    "3": "three",
    "4": "four",
    "5": "five",
    "6": "six",
    "7": "seven",
    "8": "eight",
    "9": "nine",
    "10": "ten",
    "11": "eleven",
    "12": "twelve",
    "13": "thirteen",
    "14": "fourteen",
    "15": "fifteen",
    "16": "sixteen",
    "17": "seventeen",
    "18": "eighteen",
    "19": "nineteen",
    "20": "twenty",
    "30": "thirty",
    "40": "forty",
    "50": "fifty",
    "60": "sixty",
    "70": "seventy",
    "80": "eighty",
    "90": "ninety",
  };
  
 if (num === 0) return "zero";
 let res = [];
 const length = String(num).length;

 if (length === 1) {
   for (let key in obj) {
     if (num == key){
       res.push(obj[key]);
     }
   }
   return res.join('');
 }
 else if (length === 2 && num % 100 > 10 && num % 100 < 20) {
  let dozens = [];
  
  for (let key in obj) {
    if (key == num % 100) {
      dozens.push(obj[key]); 
    }
  } return dozens.join('').trim();
 }
 else if (length === 2) {
   let dozens = [];
   let units = [];
   
   for (let key in obj) {
     if (key == Math.floor(num/10) * 10) {
       dozens.push(obj[key]); 
     }
     if (key == num % 10) {
       units.push(" " + obj[key]); 
     }
   } return dozens.concat(units).join('').trim();
 }
 else if (length === 3 && num % 100 > 10 && num % 100 < 20) {
  let hundreds = [];
  let dozens = [];
  let res;

  for (let key in obj) {
    if (key == Math.floor(num / 100)) {
      hundreds.push(obj[key] + " hundred");
    } 
    if (key == num % 100) {
      dozens.push(" " + obj[key]); 
    }
  }
  res = hundreds.concat(dozens).join('').trim();
  return res;
 }
 else if (length === 3) {
   let hundreds = [];
   let dozens = [];
   let units = [];
   let res;

   for (let key in obj) {
     if (key == Math.floor(num / 100)) {
       hundreds.push(obj[key] + " hundred ");
     } 
     if (key == Math.floor(num % 100 / 10) * 10) {
       dozens.push(obj[key]); 
     }
    
     if (key == num % 10) {
       units.push(" " + obj[key]); 
     } 
   }
   res = hundreds.concat(dozens, units).join('').trim().replace(/\s+/g,' ');
   return res;
 }
}
