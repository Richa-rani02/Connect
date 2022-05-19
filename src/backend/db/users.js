import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
  {
    _id: uuid(),
    firstName: "Adarsh",
    lastName: "Balika",
    username: "adarshbalika@gmail.com",
    userHandler:"adarshbalika",
    password: "adarshBalika123",
    bio:"adarsh balika",
    portfolioLink:"https://adarshbalika.netlify.app",
    profileImg:"https://res.cloudinary.com/dgomw715r/image/upload/v1652714208/ProjectImages/profile_adarshbalika_wqi2cz.png",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Richa",
    lastName: "rani",
    username: "test@gmail.com",
    userHandler:"richa02",
    password: "Test123@",
    bio:"An aspiring web developer",
    portfolioLink:"https://richarani.netlify.app/",
    profileImg:"https://res.cloudinary.com/dgomw715r/image/upload/v1652983721/ProjectImages/IMG_20181016_135255_kccxuq.jpg",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Sarita",
    lastName: "Singh",
    username: "sarita@gmail.com",
    userHandler:"saritasingh",
    password: "Sarita123@",
    bio:"Software developer",
    portfolioLink:"",
    profileImg:"https://res.cloudinary.com/dgomw715r/image/upload/v1652714228/ProjectImages/avatar_test_rbme8g.jpg",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Abhishek",
    lastName: "Mishra",
    username: "abhishek@gmail.com",
    userHandler:"abhi",
    password: "Abhi123@",
    bio:"UPSC Aspirant",
    portfolioLink:"",
    profileImg:"https://res.cloudinary.com/dgomw715r/image/upload/v1652983110/ProjectImages/friend2_ovgkbd.jpg",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Rishabh",
    lastName: "Singh",
    username: "rishabh@gmail.com",
    userHandler:"Nadanparinde",
    password: "risabh12@",
    bio:"Software developer",
    portfolioLink:"",
    profileImg:"https://res.cloudinary.com/dgomw715r/image/upload/v1652983110/ProjectImages/friend3_yicpaa.jpg",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Saumya",
    lastName: "Agrahari",
    username: "saumya@gmail.com",
    userHandler:"Saumya",
    password: "Saumya123@",
    bio:"UPSC Aspirant",
    portfolioLink:"",
    profileImg:"https://res.cloudinary.com/dgomw715r/image/upload/v1652984023/ProjectImages/avatar4_2_yx4zl4.jpg",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Anjali",
    lastName: "Mishra",
    username: "anjali@gmail.com",
    userHandler:"anjali",
    password: "Anjali123@",
    bio:"Electronics Enginner",
    portfolioLink:"",
    profileImg:"https://res.cloudinary.com/dgomw715r/image/upload/v1652984016/ProjectImages/avatar3_vpeqdf.jpg",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
];
