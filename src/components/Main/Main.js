import React from "react";

import { Card } from "../../common";
import { ActionPanel } from "../ActionPanel/ActionPanel";
import { ViewPanel } from "../ViewPanel/ViewPanel";

export const Main = (props) => {
  return (      
    <Card m="100px 0">
    <p>tokenAddress: 0x960165d823442df5915f606f14ee62a641d230D8 </p>
      <ActionPanel account={props.account} dao={props.dao} token={props.token} />
      <ViewPanel account={props.account} dao={props.dao} token={props.token} />
    </Card>    
  );
};
