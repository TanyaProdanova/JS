function volleyball (arg1, arg2, arg3) {
let year = arg1;
let holidays = Number(arg2);
let weekendsAtHome = Number(arg3);

let weekendsInSofia = 48 - weekendsAtHome;
let volleyInSofia = weekendsInSofia * 3/4;
let volleyAtHome = weekendsAtHome;
let holidayVolley = holidays * 2/3;

let volleyPerYear = volleyInSofia + volleyAtHome + holidayVolley;

if (year === "leap") {
    volleyPerYear *= 1.15;
} else if(year === "normal") {
    volleyPerYear = volleyPerYear;
}

console.log(Math.floor(volleyPerYear));

}
volleyball("leap",
"5",
"2")






