function run() {
    const input = document.getElementById("input").value;
    const output = document.getElementById("output");
    let out = "";

    let arr = JSON.parse(input);
    let arr2 = [];
    let i = arr.length-1;
    for (; i >= 0; i--) {
        let max = arr[0];
        let index = 0;
        for (let j = 0; j < arr.length; j++) {
            if (max <= arr[j]) {
                max = arr[j];
                index = j;
            }
        }
        arr2.push(max);
        arr.splice(index,1);
    }
    output.innerText = arr2;
}