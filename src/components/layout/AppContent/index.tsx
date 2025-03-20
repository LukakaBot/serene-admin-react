import type { AppContentProps } from "./types";

function AppContent(props: AppContentProps) {
  const { children } = props;

  return <main>{children}</main>;
}

export default AppContent;
