import image1 from "@/../public/img/blog/latest1.jpg";
import image2 from "@/../public/img/blog/latest2.jpg";
import image3 from "@/../public/img/blog/latest3.jpg";
import { v4 as uuidv4 } from "uuid";
export const latestPostData = [
  {
    id: uuidv4(),
    image: image1,
    date: "March 17, 2023",
    comment: 15,
    title: "How Podcast Helps You to Gather Your Audience in a Platform",
  },
  {
    id: uuidv4(),
    image: image2,
    date: "March 17, 2023",
    comment: 13,
    title:
      "Tom Grennan ‘breaks the internet’ as fans overload servers during virtual",
  },
  {
    id: uuidv4(),
    image: image3,
    date: "March 17, 2023",
    comment: 10,
    title: "Foo Fighters share new live version of ‘No Son Of Mine’",
  },
];
