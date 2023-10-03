import Product from "@/components/pages/home/Product";
import ProductDetailsSection from "@/components/pages/product-details/ProductDetailsSection";
import MainBody from "@/components/shared/MainBody";
import { productData } from "../../../../public/data/productDta";

const productDetails = () => {
  return (
    <MainBody>
      <ProductDetailsSection />
      <Product sectionTitle="Related product" componentData={productData} />
    </MainBody>
  );
};

export default productDetails;
