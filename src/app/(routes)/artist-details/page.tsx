import CommonDetails from "@/components/pages/albumb-details/CommonDetails";
import ConveterHead from "@/components/pages/albumb-details/ConveterHead";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Artist Details | Streamio Multipurpose Audio Podcast & Music Nextjs Template",
  description: "Streamio Multipurpose Audio Podcast & Music Nextjs Template",
};
const albumDetails = () => {
  return (
    <>
      <CommonDetails>
        <ConveterHead name="Florida Georgia" songTitle="Girls in The Hood" />
      </CommonDetails>
    </>
  );
};

export default albumDetails;
