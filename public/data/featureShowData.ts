import image1 from "@/../public/img/feature/featured-big1.jpg";
import image2 from "@/../public/img/feature/featured-big2.jpg";
import { v4 as uuidv4 } from "uuid";
export const featureShowData = [
  {
    id: uuidv4(),
    image: image1,
    date: "April 07,2023",
    totalEpisodes: 25,
    title: "Have Podcast AdvertiSign Up & Running in Minutes...",
    description:
      "Music has a way of touching our souls and evoking that words alone cannot express.",
  },
  {
    id: uuidv4(),
    image: image2,
    date: "April 07,2023",
    totalEpisodes: 25,
    title: "Tube Preamps, TLM103 vs OJ 818, Podcastage’s Beanies",
    description:
      "Music has a way of touching our souls and evoking that words alone cannot express.",
  },
];
