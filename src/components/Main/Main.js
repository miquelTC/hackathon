import React from "react";

import { Card } from "../../common";
import { ActionPanel } from "../ActionPanel/ActionPanel";
import { ViewPanel } from "../ViewPanel/ViewPanel";

export const Main = () => {
  return (
    <Card m="100px 0">
      <ActionPanel />
      <ViewPanel />
    </Card>
  );
};
