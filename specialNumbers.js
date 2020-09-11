function specialNumbers (input) {
    const n = Number(input[0]);
    let printLine = "";
    

    for (let i = 1111; i <= 9999; i++) {
        let isSpecial = true;
        let currentNum = i + "";
        for (let j = 0; j < currentNum.length; j++) {
            let currentDigit = Number(currentNum.charAt(j));
            if (n % currentDigit !== 0) {
                isSpecial = false;
                break; 
            }
        }
        if (isSpecial) {
            printLine += `${i} `;
        }
    }

console.log(printLine);
}

specialNumbers(["16"])