function run() {
    const input = document.getElementById("input").value;
    const output = document.getElementById("output");
    let out = "";

    let arr = JSON.parse(input);
    for (let i = 0; i < arr.length; i++) {
        console.log('row ' + i)
        for (let j = 0; j < arr.length-1; j++) {
           console.log(arr[i][j]);                          //it dosn't work with "output.innerText"
        }
    }

    // output.innerText = out;                  // if i would added the number to 'out' it isn't be in a row
}
