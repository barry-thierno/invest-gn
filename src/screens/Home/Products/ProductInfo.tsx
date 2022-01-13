import useAsync from "utils/hooks/useAsync";
import { ResponseStatus } from "utils/http";
import { useEffect } from "react";
import client from "utils/fetch/client";
import { IProduct } from "./Product.model";
import ProductDataView from "./ProductDataView/ProductDataView";
import ProductInfoFallback from "./ProductInfoFallback/PoductInfoFallback";

export interface ProductInfoProps {
  productName: string;
}

export const ProductInfo: React.FunctionComponent<ProductInfoProps> = ({
  productName,
}) => {
  const {
    data: products,
    status,
    error,
    run,
  } = useAsync<IProduct[]>({
    type: productName ? ResponseStatus.Pending : ResponseStatus.Idle,
  });

  useEffect(() => {
    if (!productName) {
      return;
    }
    run(client<IProduct[]>(`/products?label=${productName}`));
  }, [productName, run]);

  switch (status) {
    case ResponseStatus.Idle:
      return <div>Chercher un produit</div>;
    case ResponseStatus.Pending:
      return <ProductInfoFallback productName={productName} />;
    case ResponseStatus.Error:
      throw error;
    case ResponseStatus.Succes:
      const [product] = products;
      return <ProductDataView product={product} />;
    default:
      throw new Error("This should be impossible");
  }
};

export default ProductInfo;
