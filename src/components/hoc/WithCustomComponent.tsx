import * as React from "react";
import { IWithCustomComponentProps } from "./types";

export function WithCustomComponent<P extends object>(
  Component: React.ComponentType<P>
): React.FunctionComponent<P & IWithCustomComponentProps> {
  const fc: React.FunctionComponent<P & IWithCustomComponentProps> = ({
    viewContentManager,
    ...props
  }) => {
    return <Component {...(props as P)} />;
  };

  return fc;
}

export default WithCustomComponent;
