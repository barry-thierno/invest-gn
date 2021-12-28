import { useState } from "react";
import ProductErrorBoundary from "./products/ProductErrorBoundary/ProductErrorBoundary";
import ProductInfo from "./products/productInfo";
import SearchForm from "./searchForm/searchForm";

export interface ISearchProp {}
export const Search: React.FunctionComponent = () => {
  const [productName, setProductName] = useState("");

  function handleSubmit(productInputName: string) {
    setProductName(productInputName);
  }

  return (
    <div>
      <SearchForm initialSearchValue={productName} onSubmit={handleSubmit} />
      <div className="search-result">
        <ProductErrorBoundary
        // onReset={() => onSelect("")}
        // resetKeys={[pokemonName]}
        >
          <ProductInfo productName={productName} />
        </ProductErrorBoundary>
      </div>
    </div>
  );
};
