function run() {
    const input = document.getElementById("input").value;
    const output = document.getElementById("output");
    let out = "";

    let arr = JSON.parse(input);
    for (let i = 0; i < arr.length; i++) {
        out = out +' element number ' + i + ' is: ' + arr[i];                     //same like q10 all in same row
        console.log('element number ' + i + ' is: ' + arr[i]);              //same like q10 all in same row
    }


    output.innerText = out;
}