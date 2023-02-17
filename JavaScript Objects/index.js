
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
// addMarks("English",85)
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
addMarksMultiple("English",[91,87],["Abraham","Tom"])
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


// 6. Remove a student from a class
function removeStudent(studentName) {
    for (let i = 0; i < classObj["students"].length; i++) {
            if (studentName===classObj["students"][i]["name"]) {
                classObj["students"].splice(i,1);
            }
    }
    return classObj;
}
// console.log(removeStudent("Tom"))


// 7. Delete a subject entry from every students
function deleteSubject(subject) {
    for (let i = 0; i < classObj["students"].length; i++) {
                for (let j = 0; j < classObj["students"][i]["marks"].length; j++) {
                    if (subject===classObj["students"][i]["marks"][j]["subject"]) {
                        classObj["students"][i]["marks"].splice(j,1)
                    }
                }
            
    }
    return classObj;
}
// console.log(deleteSubject("Maths"))


// 8. Find the topper of a class given a subject
function topperSubject(subject) {
    let prev=0;
   for (let i = 0; i < classObj["students"].length; i++) {
                for (let j = 0; j < classObj["students"][i]["marks"].length; j++) {
                    if (subject===classObj["students"][i]["marks"][j]["subject"]) {
                        let newMax=Math.max(prev,classObj["students"][i]["marks"][j]["mark"]);
                        if (prev!=newMax) {
                            curTopper=[classObj["students"][i]["name"],newMax];
                        }
                        prev=newMax;
                    }
                }
            
    }
    return curTopper;
}
console.log(topperSubject("Maths"))

// 9. Find the average mark for a given subject
function averageSubject(subject) {
    let sum=0;
   for (let i = 0; i < classObj["students"].length; i++) {
                for (let j = 0; j < classObj["students"][i]["marks"].length; j++) {
                    if (subject===classObj["students"][i]["marks"][j]["subject"]) {
                        sum=sum+classObj["students"][i]["marks"][j]["mark"];
                        
                    }
                }
            
    }
    return sum/classObj["students"].length
}
console.log(averageSubject("Maths"))


// 10. Sort and display the list of students in any order
//  - ordered by name
function studentList() {
    stud=[]
    for (let i = 0; i < classObj["students"].length; i++) {
        stud.push(classObj["students"][i]["name"]);
    }
    return stud.sort();
}
console.log(studentList())