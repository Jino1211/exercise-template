function run() {
    const input = document.getElementById("input").value;
    const output = document.getElementById("output");
    let out = "";

    const arr = JSON.parse(input);
    let newArray = [];
    for(let i = 1; i < arr.length; i++) {
        for(let j = 0; j < i; j++) {
            if (arr[i] === arr[j]) {
               if (!newArray.includes(arr[i])) {
                    newArray.push(arr[i]);
                    out = out + ',' + arr[i];
               }
            }
        }
    }


    output.innerText = out;
}