import CommonDetails from "@/components/pages/albumb-details/CommonDetails";
import ConveterHead from "@/components/pages/albumb-details/ConveterHead";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Mood Details | Streamio Multipurpose Audio Podcast & Music Nextjs Template",
  description: "Streamio Multipurpose Audio Podcast & Music Nextjs Template",
};

const moodsDetails = () => {
  return (
    <>
      <CommonDetails image="/img/details/online-audio2.jpg">
        <ConveterHead name="Chester Bennington" songTitle="Party Duluxe" />
      </CommonDetails>
    </>
  );
};

export default moodsDetails;
