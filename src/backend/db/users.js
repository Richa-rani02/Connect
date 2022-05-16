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
    profileImg:"https://res.cloudinary.com/dgomw715r/image/upload/v1652714228/ProjectImages/avatar_test_rbme8g.jpg",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
];
