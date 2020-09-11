function train(input) {
    const n = Number(input[0]);
    let current = input[1];
    let index = 1;
    let totalSum = 0;
    let presentationCount = 0;



    while (current !== "Finish") {
        presentationCount++;
        let sum = 0;
        for (i = 1; i <= n; i++) {
            index++;
            sum += Number(input[index]);
        }

        let average = sum / n;
        console.log(`${current} - ${average.toFixed(2)}.`);
        totalSum += average;
        index++;
        current = input[index];
    }
    let totalAvg = totalSum / presentationCount;
    console.log(`Student's final assessment is ${totalAvg.toFixed(2)}.`);

}

train(["2",
"Objects and Classes",
"5.77",
"4.23",
"Dictionaries",
"4.62",
"5.02",
"RegEx",
"2.88",
"3.42",
"Finish"])

