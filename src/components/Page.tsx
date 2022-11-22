import Page, { Grid, GridColumn } from "@atlaskit/page";
import { PageProps, GridProps, GridColumnProps } from "@atlaskit/page/types";
import WithCustomComponent from "./hoc/WithCustomComponent";

export const AtlasPage = WithCustomComponent<PageProps>(Page);

export const AtlasGrid = WithCustomComponent<GridProps>(Grid);

export const AtlasGridColumn = WithCustomComponent<GridColumnProps>(GridColumn);
