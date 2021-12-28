import { IProduct } from "../product.model";

export type ProductDataViewProp = {
  product: IProduct;
};

export const ProductDataView: React.FunctionComponent<ProductDataViewProp> = ({
  product,
}) => {
  const { label, price, currency, unity } = product;
  return (
    <div className="product-data-view-container">
      <div className="product-label">{label}</div>
      <div className="product-price">
        {price} {currency}/ {unity}
      </div>
    </div>
  );
};

export default ProductDataView;
