import CommonDetails from "@/components/pages/album-details/CommonDetails";
import ConveterHead from "@/components/pages/album-details/ConveterHead";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Explore Details - Streamio Multipurpose Audio Podcast & Music Nextjs Template",
  description: "Streamio Multipurpose Audio Podcast & Music Nextjs Template",
};
const createEvent = () => {
  return (
    <>
      <CommonDetails>
        <ConveterHead name="Florida Georgia" songTitle="Girls in The Hood" />
      </CommonDetails>
    </>
  );
};

export default createEvent;
