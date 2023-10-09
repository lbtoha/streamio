import CommonDetails from "@/components/pages/albumb-details/CommonDetails";
import ConveterHead from "@/components/pages/albumb-details/ConveterHead";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Music Details | Streamio Multipurpose Audio Podcast & Music Nextjs Template",
  description: "Streamio Multipurpose Audio Podcast & Music Nextjs Template",
};

const musicDetails = () => {
  return (
    <>
      <CommonDetails image="/img/trending/audio-topsong.jpg">
        <ConveterHead
          name="Chester Bennington"
          songTitle="I Love My Country [Online-audio-converter.com]"
        />
      </CommonDetails>
    </>
  );
};

export default musicDetails;
