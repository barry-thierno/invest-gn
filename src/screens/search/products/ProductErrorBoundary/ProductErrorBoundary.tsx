import ErrorFallback from "commons/ErrorBoundary/ErrorFallback";
import { ErrorBoundary } from "react-error-boundary";

function ProductErrorBoundary(props: any) {
  return <ErrorBoundary fallback={ErrorFallback} {...props} />;
}

export default ProductErrorBoundary;
