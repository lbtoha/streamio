import CommonDetails from "@/components/pages/albumb-details/CommonDetails";
import ConveterHead from "@/components/pages/albumb-details/ConveterHead";
import MainBody from "@/components/shared/MainBody";

const moodsDetails = () => {
  return (
    <MainBody>
      <CommonDetails image="/img/details/online-audio2.jpg">
        <ConveterHead name="Chester Bennington" songTitle="Party Duluxe" />
      </CommonDetails>
    </MainBody>
  );
};

export default moodsDetails;
