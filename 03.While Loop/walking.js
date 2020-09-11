function walking(input) {
    const goal = 10000;
    let index = 0;
    let steps = 0;

    while (steps < goal) {
        let current = input[index];
        if (current === "Going home") {
            steps += Number(input[index + 1]);
            break;
        }
        steps += Number(input[index]);
        index++;
    }

    if (steps >= goal) {
        console.log("Goal reached! Good job!");
        console.log(`${steps - goal} steps over the goal!`);
    } else {
        console.log(`${goal - steps} more steps to reach goal.`);
    }
}

walking(["1500",
"3000",
"250",
"1548",
"2000",
"Going home",
"2000"])
