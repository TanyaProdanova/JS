function cake(input) {
    let w = Number(input[0]);
    let l = Number(input[1]);
    let totalSlices = l * w;
    let index = 2;
    let sumSlices = 0;

    while (input[index] !== "STOP") {
        let currentSlice = Number(input[index]);
        sumSlices += currentSlice;

        if (sumSlices > totalSlices) {
            let diff = sumSlices - totalSlices;
            console.log(`No more cake left! You need ${diff} pieces more.`);
            break;
        }
        index++;
        currentSlice = Number(input[index]);

    }

    if (totalSlices > sumSlices) {
        let diff = totalSlices - sumSlices;
        console.log(`${diff} pieces are left.`);
    }
}

cake(["10",
"2",
"2",
"4",
"6",
"STOP"])
