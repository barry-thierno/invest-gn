import ErrorFallback from "commons/ErrorBoundary/ErrorFallback";
import {
  ErrorBoundary,
  ErrorBoundaryPropsWithComponent,
} from "react-error-boundary";

export type ProductErrorBoundaryProps = React.PropsWithChildren<
  Omit<ErrorBoundaryPropsWithComponent, "FallbackComponent">
>;

function ProductErrorBoundary(props: ProductErrorBoundaryProps) {
  return <ErrorBoundary FallbackComponent={ErrorFallback} {...props} />;
}

export default ProductErrorBoundary;
