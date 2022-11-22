import {
  AtlassianNavigation,
  AtlassianNavigationProps,
  PrimaryButton,
  PrimaryDropdownButton,
  ProductHome,
} from "@atlaskit/atlassian-navigation";
import { AtlassianIcon, AtlassianLogo } from "@atlaskit/logo";
import { IWithCustomComponentProps } from "./hoc/types";
import WithCustomComponent from "./hoc/WithCustomComponent";

const AtlasNavigation =
  WithCustomComponent<AtlassianNavigationProps>(AtlassianNavigation);

interface IItemProps {
  type: "PrimaryButton" | "PrimaryDropdownButton";
  children: string;
}

interface INavigationProps
  extends Omit<AtlassianNavigationProps, "primaryItems" | "renderProductHome">,
    IWithCustomComponentProps {
  items: IItemProps[];
}

/**
 * Map each item into primary item
 * @param item IItemProps
 * @returns
 */
function makePrimaryItem(item: IItemProps): React.ReactNode {
  const { type, children } = item;
  const Component =
    type === "PrimaryButton" ? PrimaryButton : PrimaryDropdownButton;

  return <Component>{children}</Component>;
}

/**
 * Render Atlassian Logo
 * @returns React.ReactElement
 */
const AtlassianProductHome = (): React.ReactElement => (
  <ProductHome icon={AtlassianIcon} logo={AtlassianLogo} />
);

const Navigation: React.FunctionComponent<INavigationProps> = ({
  items,
  ...props
}) => {
  return (
    <AtlasNavigation
      primaryItems={items.map(makePrimaryItem)}
      renderProductHome={AtlassianProductHome}
      {...props}
    />
  );
};

export default Navigation;
