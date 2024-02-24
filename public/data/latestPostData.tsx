import image1 from "@/../public/img/blog/latest1.jpg";
import image2 from "@/../public/img/blog/latest2.jpg";
import image3 from "@/../public/img/blog/latest3.jpg";
import image4 from "@/../public/img/blog/latest4.jpg";
import image5 from "@/../public/img/blog/latest5.jpg";
import image6 from "@/../public/img/blog/latest6.jpg";
import { v4 as uuidv4 } from "uuid";
export const latestPostData = [
  {
    id: uuidv4(),
    image: image1,
    date: "March 17, 2023",
    comment: 15,
    title: "How Podcast Helps You to Gather Your Audience in a Platform",
    type: "Features",
    song: "https://codeskulptor-demos.commondatastorage.googleapis.com/GalaxyInvaders/theme_01.mp3",
  },
  {
    id: uuidv4(),
    image: image2,
    date: "March 17, 2023",
    comment: 13,
    title:
      "Tom Grennan ‘breaks the internet’ as fans overload servers during virtual",
    type: "Music",
    song: "https://codeskulptor-demos.commondatastorage.googleapis.com/pang/paza-moduless.mp3",
  },
  {
    id: uuidv4(),
    image: image3,
    date: "March 17, 2023",
    comment: 15,
    title: "How Podcast Helps You to Gather Your Audience in a Platform",
    type: "Features",
    song: "https://commondatastorage.googleapis.com/codeskulptor-assets/sounddogs/soundtrack.ogg",
  },
  {
    id: uuidv4(),
    image: image4,
    date: "March 17, 2023",
    comment: 10,
    title: "Foo Fighters share new live version of ‘No Son Of Mine’",
    type: "Features",
    song: "https://codeskulptor-demos.commondatastorage.googleapis.com/descent/background%20music.mp3",
  },
  {
    id: uuidv4(),
    image: image5,
    date: "March 17, 2023",
    comment: 15,
    title: "How Podcast Helps You to Gather Your Audience in a Platform",
    type: "Music",
    song: "https://commondatastorage.googleapis.com/codeskulptor-assets/Epoq-Lepidoptera.ogg",
  },
  {
    id: uuidv4(),
    image: image6,
    date: "March 17, 2023",
    comment: 15,
    title: "How Podcast Helps You to Gather Your Audience in a Platform",
    type: "Music",
    song: "https://commondatastorage.googleapis.com/codeskulptor-demos/pyman_assets/ateapill.ogg",
  },
];
