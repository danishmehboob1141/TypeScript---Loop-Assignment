let myObject = {
    item1 : "Value Item 1",
    item2 : "Value Item 2",
    item3 : "Value Item 3"
}

for (let property in myObject) {
    console.log(property + " : " + myObject[property])
}
