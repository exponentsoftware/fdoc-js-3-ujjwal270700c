const convertArrayToObject=(student)=>{
   const newStudent=[];
   student.forEach(element => {
       let studentObject={
           name:element[0],
           skills:element[1],
           scores:element[2],
       }
       newStudent.push(studentObject)
   });
   return newStudent
}

const students = [
    ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]],
    ['John', ['HTM', 'CSS', 'JS', 'React'], [85, 80, 85, 80]]
]
console.log(convertArrayToObject(students));