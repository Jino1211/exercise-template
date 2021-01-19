function run() {
    const input = document.getElementById("input").value;
    const num = document.getElementById("num").value;
    const output = document.getElementById("output");
    let out = "";

    const arr = JSON.parse(input);
    const findThisNum = JSON.parse(num);
    let index;
    for (let i = 0; i < arr.length; i++) {
        if (findThisNum === arr[i]) {
            index = i;
            break;
        }
    }
    out = index;
    output.innerText = out;
}