import { useState } from "react";
import ProductErrorBoundary from "./Products/ProductErrorBoundary/ProductErrorBoundary";
import ProductInfo from "./Products/ProductInfo";
import SearchForm from "./SearchForm/SearchForm";

export const Search: React.FunctionComponent = () => {
  const [productName, setProductName] = useState("");

  function handleSubmit(productInputName: string) {
    setProductName(productInputName);
  }

  return (
    <div>
      <SearchForm initialSearchValue={productName} onSubmit={handleSubmit} />
      <div className="search-result">
        <ProductErrorBoundary resetKeys={[productName]}>
          <ProductInfo productName={productName} />
        </ProductErrorBoundary>
      </div>
    </div>
  );
};
