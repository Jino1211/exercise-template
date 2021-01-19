function run() {
    const anotherArray = document.getElementById("anotherArray").value;
    const input = document.getElementById("input").value;
    const output = document.getElementById("output");
    let out = "";

    const arr = JSON.parse(input);
    const secondArray = JSON.parse(anotherArray);
    let max = arr.length;
    let min = secondArray.length;
    //this loop check duplicate in the firs array and remove if she find
    for (let i = 0; i < max; i++) {
        for (let j = i + 1; j < max; j++) {
            if (arr[i] === arr[j]) {
                arr.splice(j, 1);
            }
        }
    }
    //this loop check duplicate in the second array and remove if she find
    for (let i = 0; i < max; i++) {
        for (let j = i + 1; j < max; j++) {
            if (secondArray[i] === secondArray[j]) {
                secondArray.splice(j, 1);
            }
        }
    }
    // this loo check duplicate between both of array and remove if she find
    if (max < min) {                    
        max = min;
        min = arr.length;
    }
    for (let i = 0; i < max; i++) {
        for (let j = 0; j < min; j++) {
            if (arr[i] === secondArray[j]) {
                secondArray.splice(j, 1);
            }
        }
    }
    out = arr.concat(secondArray)
    




    output.innerText = out;
}