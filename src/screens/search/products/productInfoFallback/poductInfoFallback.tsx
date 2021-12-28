import React from "react";
import { IProduct } from "../product.model";
import ProductDataView from "../productDataView/productDataView";

export type ProductInfoFallbackProps = {
  productName: string;
};
const ProductInfoFallback: React.FunctionComponent<ProductInfoFallbackProps> =
  ({ productName }) => {
    const initialName = React.useRef(productName).current;
    const product: IProduct = {
      id: "xxx",
      label: initialName,
      price: 0,
      unity: "XXX",
      currency: "XXX",
    };
    return <ProductDataView product={product} />;
  };

export default ProductInfoFallback;
