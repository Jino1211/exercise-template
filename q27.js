// function run(input[{ author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254},
// { author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264},],title = 'author') {
//     // const input = document.getElementById("input").value;
//     // const output = document.getElementById("output");
    const input = [{ author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254},
    { author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264}];
    const title = "libraryID";
    let out = "";
    // the variable input and title simulator like input from user.
    const arr = [];
    for (let i = 0; i < input.length; i++) {
        let partOf = input[i];
        if (partOf.hasOwnProperty(title)) {
            arr.push(partOf[title]);
        }
    }
    console.log(arr);




    output.innerText = out;