import image1 from "@/../public/img/details/ttrack1.jpg";
import image2 from "@/../public/img/details/ttrack2.jpg";
import image3 from "@/../public/img/details/ttrack3.jpg";
import { v4 as uuidv4 } from "uuid";

export const weeklytopTrackData = [
  {
    id: uuidv4(),
    image: image1,
    title: "What See Again",
    singer: "Laufey",
    song: "https://commondatastorage.googleapis.com/codeskulptor-demos/riceracer_assets/fx/engine-8.ogg",
  },
  {
    id: uuidv4(),
    image: image2,
    title: "Rush",
    singer: "Laufey",
    song: "https://commondatastorage.googleapis.com/codeskulptor-demos/riceracer_assets/fx/engine-5.ogg",
  },
  {
    id: uuidv4(),
    image: image3,
    title: "JR Overdosh Afro FLY",
    singer: "Mzik CG",
    song: "https://commondatastorage.googleapis.com/codeskulptor-assets/sounddogs/thrust.ogg",
  },
  {
    id: uuidv4(),
    image: image3,
    title: "I Love My Country",
    singer: "Mzik CG",
    song: "https://commondatastorage.googleapis.com/codeskulptor-demos/riceracer_assets/music/race1.ogg",
  },
];
