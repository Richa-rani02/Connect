import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";

/**
 * Posts can be added here.
 * You can add default posts of your wish with different attributes
 * */

export const posts = [
  {
    _id: uuid(),
    content:{
      text: "Success comes to those who will and dare !!",
      pic:"https://res.cloudinary.com/dgomw715r/image/upload/v1650565396/ProjectImages/heroimg2_fha3p9.jpg"
    },
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "adarshbalika@gmail.com",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content:{
      text:  "On a mission to become better everyday !!",
      pic:"https://res.cloudinary.com/dgomw715r/image/upload/v1650565396/ProjectImages/heroimg2_fha3p9.jpg"
    },
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "test@gmail.com",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  // {
  //   _id: uuid(),
  //   content:
  //     "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.",
  //   likes: {
  //     likeCount: 0,
  //     likedBy: [],
  //     dislikedBy: [],
  //   },
  //   username: "test@gmail.com",
  //   createdAt: formatDate(),
  //   updatedAt: formatDate(),
  // },
];
