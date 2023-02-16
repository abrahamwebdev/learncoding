
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




// 2. Enter mark for a student
function addMarks(subject,mark) {
    classObj["students"][0]["marks"]=classObj["students"][0]["marks"] || [];
    classObj["students"][0]["marks"].push({"subject":subject,"mark":mark});
}
addMarks("English",85)
console.log(classObj)