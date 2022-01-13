import { FunctionComponent } from "react";
import { IProduct } from "screens/Home/Products/Product.model";
import ProductOverviewLine from "screens/Home/Products/ProductOverviewLine/ProductOverviewLine";
import styled from "styled-components";

export type MoreRecentProps = {
  products: IProduct[];
};

const ViewContainer = styled.div`
  width: 80%;
`;
const MoreViewed: FunctionComponent<MoreRecentProps> = ({ products }) => {
  return (
    <ViewContainer>
      <h2>Les plus vues</h2>
      <div>
        {products.map((product) => (
          <ProductOverviewLine {...product} />
        ))}
      </div>
    </ViewContainer>
  );
};

export default MoreViewed;
