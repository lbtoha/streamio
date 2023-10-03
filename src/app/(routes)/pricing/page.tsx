import PricingPlan from "@/components/pages/pricing/PricingPlan";
import BreadCrumSingle from "@/components/shared/BreadCrumSingle";
import MainBody from "@/components/shared/MainBody";

const podcast = () => {
  return (
    <MainBody>
      <BreadCrumSingle page="Pricing Plan" />
      <PricingPlan />
    </MainBody>
  );
};

export default podcast;
