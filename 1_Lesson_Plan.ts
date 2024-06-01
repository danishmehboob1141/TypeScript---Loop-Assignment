type Lesson = {
    lessonName : string,
    status : boolean
}
let myWork: Lesson[] = []

for (let i=0; i<10; i++) {
    if (i % 2 == 0) {
        let lesson : Lesson = {
            lessonName: "Lesson No "+(i+1),
            status : true
        }
        myWork.push(lesson)
    } else {
        let lesson : Lesson = {
            lessonName : "Lesson No "+(i+1),
            status : false
        }
        myWork.push(lesson)
    }

}

for (let i=0; i<myWork.length; i++) {
    console.log("Name: " + myWork[i].lessonName + ", Lesson Status: " + myWork[i].status)
}
