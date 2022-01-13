import styled from "styled-components";
import { IProduct } from "../Product.model";

const ProductOverviewLineContainer = styled.div`
  display: flex;
  justify-content: start;
  margin: 1rem;
`;
const Tag = styled.div`
  border-radius: 50rem;
  border: 1px solid black;
  margin-right: 2rem;
  font-size: 1rem;
  width: 2rem;
`;
const ProductLabel = styled.div`
  text-align: left;
`;

function ProductOverviewLine({ label, price, currency, unity }: IProduct) {
  return (
    <ProductOverviewLineContainer>
      <Tag>{label[0].toUpperCase()}</Tag>
      <ProductLabel>{label}</ProductLabel>
      <div className="price">{`${price}/${unity} ${currency}`}</div>
    </ProductOverviewLineContainer>
  );
}

export default ProductOverviewLine;
