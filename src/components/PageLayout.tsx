import { Banner, Content, PageLayout } from "@atlaskit/page-layout";
import {
  PageLayoutProps,
  SlotHeightProps,
} from "@atlaskit/page-layout/dist/types/common/types";
import WithCustomComponent from "./hoc/WithCustomComponent";

export const AtlasPageLayout = WithCustomComponent<PageLayoutProps>(PageLayout);

export const AtlasBanner = WithCustomComponent<SlotHeightProps>(Banner);

export const AtlasContent = WithCustomComponent<{ children: React.ReactNode }>(
  Content
);
