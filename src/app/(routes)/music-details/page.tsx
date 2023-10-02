import CommonDetails from "@/components/pages/albumb-details/CommonDetails";
import ConveterHead from "@/components/pages/albumb-details/ConveterHead";
import MainBody from "@/components/shared/MainBody";

const musicDetails = () => {
  return (
    <MainBody>
      <CommonDetails image="/img/trending/audio-topsong.jpg">
        <ConveterHead
          name="Chester Bennington"
          songTitle="I Love My Country [Online-audio-converter.com]"
        />
      </CommonDetails>
    </MainBody>
  );
};

export default musicDetails;
