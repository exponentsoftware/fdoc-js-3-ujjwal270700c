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

const student = {
    name: 'David',
    age: 25,
    skills: {
        frontEnd: [
            { skill: 'HTML', level: 10 },
            { skill: 'CSS', level: 8 },
            { skill: 'JS', level: 8 },
            { skill: 'React', level: 9 }
        ],
        backEnd: [
            { skill: 'Node',level: 7 },
            { skill: 'GraphQL', level: 8 },
        ],
        dataBase:[
            { skill: 'MongoDB', level: 7.5 },
        ],
        dataScience:['Python', 'R', 'D3.js']
    }
}
// 1.
const addSkillsForFrontend=(studentObject,name,level)=>{
   const {skills}=studentObject;
  const found=skills.frontEnd.find(item => item.skill === name)
  if(!found){
    const newSkill={
        skill:name,
        level:level,
    }
    skills.frontEnd.push(newSkill)
  }
 return skills
}
// 2.
const addSkillsForBackend=(studentObject,name,level)=>{
    const {skills}=studentObject;
   const found=skills.backEnd.find(item => item.skill === name)
   if(!found){
     const newSkill={
         skill:name,
         level:level,
     }
     skills.backEnd.push(newSkill)
   }
  return skills
 }
 // 3.
 const addSkillsForDatabase=(studentObject,name,level)=>{
    const {skills}=studentObject;
   const found=skills.dataBase.find(item => item.skill === name)
   if(!found){
     const newSkill={
         skill:name,
         level:level,
     }
     skills.dataBase.push(newSkill)
   }
  return skills
 }
 // 4.
 const addSkillsForDataScience=(studentObject,name)=>{
    const {skills}=studentObject;
   const found=skills.dataScience.find(item => item.skill === name)
   if(!found){
     skills.dataScience.push(name)
   }
  return skills
 }
addSkillsForFrontend(student,'BootStrap',8)
addSkillsForBackend(student,'Express',9)
addSkillsForDatabase(student,'SQL',8)
console.log(addSkillsForDataScience(student,'SQL'));