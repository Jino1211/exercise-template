function run() {
    const input = document.getElementById("input").value;
    const output = document.getElementById("output");
    let out = "";

    const arr = JSON.parse(input);
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if ((arr[i] % 2 === 0) && (arr[i+1] % 2 === 0)) {
            newArr.push(arr[i], '-');
        } else {
            newArr.push(arr[i]);
        }
    }
    output.innerText = newArr;
}