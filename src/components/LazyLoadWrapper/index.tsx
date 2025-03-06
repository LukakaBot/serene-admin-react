import { Suspense } from "react";

interface LazyLoadWrapperProps {
  component: React.ReactElement;
}

function LazyLoadWrapper(props: LazyLoadWrapperProps) {
  const { component } = props;

  return <Suspense fallback={<div>Loading...</div>}>{component}</Suspense>;
}

export default LazyLoadWrapper;
