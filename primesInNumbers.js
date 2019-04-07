function primeFactors(n) {
var arrayOfNumbers = [];
var string = '';
 for(let i = 2; 2<n;) {
     if(n % i === 0) {
         arrayOfNumbers.push(i);
         n = n /i;
     } else {
         i++;
     }
 }

    let arrayOfUnique = [];
    for (let x = 0; x < arrayOfNumbers.length; x++) {

        if(arrayOfNumbers[x] === arrayOfNumbers[x+1]) {
        } else {
            arrayOfUnique.push(arrayOfNumbers[x]);
        }
    }

    for(let t of arrayOfUnique) {
        if(arrayOfNumbers.filter( array => array == t).length > 1) {
            string += '(' + t +'**'+arrayOfNumbers.filter( array => array == t).length+ ')';
        } else {
            string += '(' + t + ')';
        }
    }

 return string;
}

console.log(primeFactors(86240));
