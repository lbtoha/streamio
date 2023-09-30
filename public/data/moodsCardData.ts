import image1 from "@/../public/img/mood/mood1.jpg";
import image2 from "@/../public/img/mood/mood2.jpg";
import image3 from "@/../public/img/mood/mood3.jpg";
import image4 from "@/../public/img/mood/mood4.jpg";
import image5 from "@/../public/img/mood/mood5.jpg";
import image6 from "@/../public/img/mood/mood6.jpg";
import { v4 as uuidv4 } from "uuid";
export const moodsCardData = [
  {
    id: uuidv4(),
    image: image1,
    title: "Bangla Sing Along",
    subTitle: "James",
    song: "http://physical-authority.surge.sh/music/2.mp3",
  },
  {
    id: uuidv4(),
    image: image2,
    title: "Sing- Along Indie...",
    subTitle: "Sanam",
    song: "http://physical-authority.surge.sh/music/2.mp3",
  },
  {
    id: uuidv4(),
    image: image3,
    title: "Hot Hits Maghred Now",
    subTitle: "Arijite Singh",
    song: "http://physical-authority.surge.sh/music/2.mp3",
  },
  {
    id: uuidv4(),
    image: image4,
    title: "Classic Oldies",
    subTitle: "Deja Vu",
    song: "http://physical-authority.surge.sh/music/2.mp3",
  },
  {
    id: uuidv4(),
    image: image5,
    title: "Party Deluxe",
    subTitle: "Pritom",
    song: "http://physical-authority.surge.sh/music/2.mp3",
  },
  {
    id: uuidv4(),
    image: image6,
    title: "Soulful sonu Nigan",
    subTitle: "Sonu Nigam",
    song: "http://physical-authority.surge.sh/music/2.mp3",
  },
];
