import CommonDetails from "@/components/pages/albumb-details/CommonDetails";
import ConveterHead from "@/components/pages/albumb-details/ConveterHead";
import MainBody from "@/components/shared/MainBody";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};
const albumDetails = () => {
  return (
    <MainBody>
      <CommonDetails image="/img/details/audio-trending.jpg">
        <ConveterHead name="Florida Georgia" songTitle="Girls in The Hood" />
      </CommonDetails>
    </MainBody>
  );
};

export default albumDetails;
