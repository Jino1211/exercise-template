function run() {
    const input = document.getElementById("input").value;
    const output = document.getElementById("output");
    let out = "";

    const arr = JSON.parse(input);   //because the JSON action is work only with 0,null. if you put something else he can't change it to an array
    let newArray = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i]) {
            newArray.push(arr[i]);
        }
    }
    out = newArray;




    output.innerText = out;
}