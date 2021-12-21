// 1 e ve kendisine bölünecek, 1den büyük pozitif tamsayı olacak

const arguments = process.argv.slice(2);

function showPrimeNumbers(lownumber, highNumber) {
    for (let i =lownumber; i<= highNumber; i++) {
        let isPrime = true;
        for (let j =2; j<=i;j++) {
            if(i%j === 0 && j !== i ){
                isPrime = false
            }
        }
        if(isPrime){
            console.log(i);
        }
    }
}
// showPrimeNumber(2,9);
// console.log(process);
//console.log(process.argv.slice(2));
showPrimeNumbers(arguments[0]*1, arguments[1]*1);