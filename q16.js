function run() {
    const input = document.getElementById("input").value;
    const untilYear = document.getElementById("untilYear").value;
    const output = document.getElementById("output");
    let out = "";


    
    // this  accept range of years and check with year is a LeapYear
    const year = JSON.parse(input);
    const lastYear = JSON.parse(untilYear);
    let range = [];
    for (let i = year; i <= lastYear; i++) {
        range.push(i);
    }
    for (let j = 0; j < range.length; j++) { 
         if (((range[j] % 4 === 0) && (range[j] % 100 !== 0)) || ((range[j] % 100 === 0) && (range[j] % 400 === 0))){
            out += ' ' + range[j];
        }

    }
    output.innerText = out;
}