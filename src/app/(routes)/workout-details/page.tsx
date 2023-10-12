import CommonDetails from "@/components/pages/album-details/CommonDetails";
import ConveterHead from "@/components/pages/album-details/ConveterHead";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Workout Details - Streamio Multipurpose Audio Podcast & Music Nextjs Template",
  description: "Streamio Multipurpose Audio Podcast & Music Nextjs Template",
};
const workoutAll = () => {
  return (
    <>
      <CommonDetails image="/img/details/allwork-single.jpg">
        <ConveterHead name="ASD" songTitle="44m" />
      </CommonDetails>
    </>
  );
};

export default workoutAll;
