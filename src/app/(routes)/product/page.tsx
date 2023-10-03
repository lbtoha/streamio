import AllProducts from "@/components/pages/product/AllProducts";
import BreadCrumSingle from "@/components/shared/BreadCrumSingle";
import MainBody from "@/components/shared/MainBody";

const podcast = () => {
  return (
    <MainBody>
      <BreadCrumSingle page="Products" />
      <AllProducts />
    </MainBody>
  );
};

export default podcast;
