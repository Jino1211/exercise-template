function run() {
    const input = document.getElementById("input").value;
    const n = document.getElementById("n").value;
    const output = document.getElementById("output");
    let out = "";
/* */
    let num = JSON.parse(n);
    let arr = JSON.parse(input);
    let temp = [];
    for (let i = 0; i < n; i++) {
        temp.push(arr[i]);
    }
    out = temp;




    output.innerText = out;
}