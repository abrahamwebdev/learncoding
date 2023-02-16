
// Write a function to create a user object from the arguments given.
// Take the following details as an argument: name, email, age and phone number
user={}
function addUser(name,email,age,phoneNumber) {
    user["name"]=name;
    user["email"]=email;
    user["age"]=age;
    user["phoneNumber"]=phoneNumber;

    return user;
}
console.log(addUser("Abraham","abc@gmail.com","23","9800000000"))




// 1. Add student
//  It should accept name, id
classObj={
    "name" : "class A" ,
    "teacherName" : "Mary" ,
};
function addStudents(name,id) {
    classObj["students"]=classObj["students"] || [];
    classObj["students"].push({"name":name,"id":id});

    return classObj;
}
console.log(addStudents("Abraham","28"))
console.log(addStudents("Tom","30"))




// 2. Enter mark for a student
function addMarks(subject,mark) {
    classObj["students"][0]["marks"]=classObj["students"][0]["marks"] || [];
    classObj["students"][0]["marks"].push({"subject":subject,"mark":mark});
}
addMarks("English",85)
// console.log(classObj)


// 3. Enter mark for a subject for multiple students
function addMarksMultiple(subject,markList,studentList) {
    for (let i = 0; i < classObj["students"].length; i++) {
     if (studentList.includes(classObj["students"][i]["name"])) {
            classObj["students"][i]["marks"]=classObj["students"][i]["marks"] || [];
            classObj["students"][i]["marks"].push({"subject":subject,"mark":markList[studentList.indexOf(classObj["students"][i]["name"])]});
    }
    }
    }

addMarksMultiple("Maths",[81,82],["Abraham","Tom"])
console.log(classObj)



// 4. Edit mark for a particular subject of a student
function editMark(subject,newMark,studentName) {
        for (let i = 0; i < classObj["students"].length; i++) {
            if (studentName===classObj["students"][i]["name"]) {
                for (let j = 0; j < classObj["students"][i]["marks"].length; j++) {
                    if (subject===classObj["students"][i]["marks"][j]["subject"]) {
                        classObj["students"][i]["marks"][j]["mark"]=newMark;
                    }
                }
            }
    }
}
editMark("English",97,"Abraham")
console.log(classObj)



// 5. Change the class teacher of a class
function changeTeacher(teacher) {
    classObj["teacherName"]=teacher;
    return classObj;
}
console.log(changeTeacher("Preethy"));