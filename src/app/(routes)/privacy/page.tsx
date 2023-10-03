import PrivacyPolicy from "@/components/pages/privacy/PrivacyPolicy";
import BreadCrumSingle from "@/components/shared/BreadCrumSingle";
import MainBody from "@/components/shared/MainBody";

const podcast = () => {
  return (
    <MainBody>
      <BreadCrumSingle page="Privacy Policy" />
      <PrivacyPolicy />
    </MainBody>
  );
};

export default podcast;
