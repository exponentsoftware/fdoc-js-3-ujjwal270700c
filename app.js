const convertArrayToObject = (student) => {
  const newStudent = [];
  student.forEach((element) => {
    let studentObject = {
      name: element[0],
      skills: element[1],
      scores: element[2],
    };
    newStudent.push(studentObject);
  });
  return newStudent;
};
// Students Array
const students = [
  ["David", ["HTM", "CSS", "JS", "React"], [98, 85, 90, 95]],
  ["John", ["HTM", "CSS", "JS", "React"], [85, 80, 85, 80]],
];
console.log(convertArrayToObject(students));

const student = {
  name: "David",
  age: 25,
  skills: {
    frontEnd: [
      { skill: "HTML", level: 10 },
      { skill: "CSS", level: 8 },
      { skill: "JS", level: 8 },
      { skill: "React", level: 9 },
    ],
    backEnd: [
      { skill: "Node", level: 7 },
      { skill: "GraphQL", level: 8 },
    ],
    dataBase: [{ skill: "MongoDB", level: 7.5 }],
    dataScience: ["Python", "R", "D3.js"],
  },
};
// 1.
const addSkillsForFrontend = (studentObject, name, level) => {
  const { skills } = studentObject;
  const found = skills.frontEnd.find((item) => item.skill === name);
  if (!found) {
    const newSkill = {
      skill: name,
      level: level,
    };
    skills.frontEnd.push(newSkill);
  }
  return skills;
};
// 2.
const addSkillsForBackend = (studentObject, name, level) => {
  const { skills } = studentObject;
  const found = skills.backEnd.find((item) => item.skill === name);
  if (!found) {
    const newSkill = {
      skill: name,
      level: level,
    };
    skills.backEnd.push(newSkill);
  }
  return skills;
};
// 3.
const addSkillsForDatabase = (studentObject, name, level) => {
  const { skills } = studentObject;
  const found = skills.dataBase.find((item) => item.skill === name);
  if (!found) {
    const newSkill = {
      skill: name,
      level: level,
    };
    skills.dataBase.push(newSkill);
  }
  return skills;
};
// 4.
const addSkillsForDataScience = (studentObject, name) => {
  const { skills } = studentObject;
  const found = skills.dataScience.find((item) => item.skill === name);
  if (!found) {
    skills.dataScience.push(name);
  }
  return skills;
};
addSkillsForFrontend(student, "BootStrap", 8);
addSkillsForBackend(student, "Express", 9);
addSkillsForDatabase(student, "SQL", 8);
console.log(addSkillsForDataScience(student, "SQL"));

// 2 Question
const users = [
  {
    _id: "ab12ex",
    username: "Alex",
    email: "alex@alex.com",
    password: "123123",
    createdAt: "17/05/2019 9:00 AM",
    isLoggedIn: false,
  },
  {
    _id: "fg12cy",
    username: "Asab",
    email: "asab@asab.com",
    password: "123456",
    createdAt: "17/05/2019 9:30 AM",
    isLoggedIn: true,
  },
  {
    _id: "zwf8md",
    username: "Brook",
    email: "brook@brook.com",
    password: "123111",
    createdAt: "17/05/2019 9:45 AM",
    isLoggedIn: true,
  },
  {
    _id: "eefamr",
    username: "Martha",
    email: "martha@martha.com",
    password: "123222",
    createdAt: "17/05/2019 9:50 AM",
    isLoggedIn: false,
  },
  {
    _id: "ghderc",
    username: "Thomas",
    email: "thomas@thomas.com",
    password: "123333",
    createdAt: "17/05/2019 10:00 AM",
    isLoggedIn: false,
  },
];
// Product Array
const products = [
  {
    _id: "eedfcf",
    name: "mobile phone",
    description: "Huawei Honor",
    price: 200,
    ratings: [
      { userId: "fg12cy", rate: 5 },
      { userId: "zwf8md", rate: 4.5 },
    ],
    likes: [],
  },
  {
    _id: "aegfal",
    name: "Laptop",
    description: "MacPro: System Darwin",
    price: 2500,
    ratings: [],
    likes: ["fg12cy"],
  },
  {
    _id: "hedfcg",
    name: "TV",
    description: "Smart TV:Procaster",
    price: 400,
    ratings: [{ userId: "fg12cy", rate: 5 }],
    likes: ["fg12cy"],
  },
];

const signUp = (data) => {
  const found = users.find((item) => item._id === data._id);
  if (found) {
    console.log("User already exist");
  } else {
    users.push(data);
    console.log('newUser:',data);
  }
};

signUp({
  _id: "ghderc",
  username: "Thomas",
  email: "thomas@thomas.com",
  password: "123333",
  createdAt: "17/05/2019 10:00 AM",
  isLoggedIn: false,
});

const signIn=(data)=>{
    const found=users.find(item => item._id === data._id)
    if(!found){
      return  console.log('Please signup first');
    }else{
        if(found.email ===data.email){
            if(found.password=== data.password){
                console.log('Login Successfully');
            }else{
                return console.log('Password is Incorrect');
            } 
        }else{
            return console.log('Email is Wrong');
        }
    }
}
signIn({
    _id: "ghderc",
  username: "Thomas",
  email: "thomas@thomas.com",
  password: "123333",
  createdAt: "17/05/2019 10:00 AM",
  isLoggedIn: false,
})

// B

const rateProduct=(rating)=>{
    const found=products.find(item => item._id ==rating._id)
    if(found){
        const check =found.ratings.find(item => item.userId === rating.userId)
        if(!check){
            found.ratings.push({userId:rating.userId,rate:rating.rate})
            console.log(found);
        }else{
            console.log("user already rated the product");
        }
    }else{
        return console.log("Product Not Found");
    }
}
rateProduct({ _id: "eedfcf", userId: "fg12cy", rate: 2 })


const averageRating=(product)=>{
    let ratingSum = 0;
    const found=products.find(item => item._id === product._id)
    if(found){
       found.ratings.forEach((item)=>{
           ratingSum=item.rate+ ratingSum;
       })
       return ratingSum/found.ratings.length;
    }else{
      return  console.log("Product not found");
    }
}
console.log(averageRating(products[0]));