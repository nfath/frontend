const emptyArray = (myArray) => {
    //console.log(myArray);
    while(myArray.length > 0) {
        myArray.pop();
        //console.log(myArray);
    }
    return myArray;
}

console.log(emptyArray([1,2,3]));
console.log(emptyArray(["egg","bacon","toast","coffee","random","juice"]))
