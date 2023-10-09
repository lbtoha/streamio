import Workout from "@/components/pages/home/Workout";
import BreadCrumSingle from "@/components/shared/BreadCrumSingle";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Workout | Streamio Multipurpose Audio Podcast & Music Nextjs Template",
  description: "Streamio Multipurpose Audio Podcast & Music Nextjs Template",
};
const workout = () => {
  return (
    <>
      <BreadCrumSingle page="Workout" />
      <Workout />
    </>
  );
};

export default workout;
