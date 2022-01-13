import { FunctionComponent } from "react";
import { IProduct } from "screens/Home/Products/Product.model";
import ProductOverviewLine from "screens/Home/Products/ProductOverviewLine/ProductOverviewLine";

export type LastUpdatedProps = {
  products: IProduct[];
};

const LastUpdated: FunctionComponent<LastUpdatedProps> = ({ products }) => {
  return (
    <div>
      <h2>Les dernières mise à jour</h2>
      {products.map((product) => (
        <ProductOverviewLine {...product} />
      ))}
    </div>
  );
};

export default LastUpdated;
