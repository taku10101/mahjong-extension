import React from "react";
import { Tabs } from "../../lib/yamada-ui";
import { YakuBody } from "../yaku/Yakubody";
import { YakuHeader } from "../yaku/YakuHeader";
import { TabBody } from "./TabBody";
import { TabHeader } from "./TabHeader";

export const Bar = () => {
  const data = {
    header: [<YakuHeader key={0} />, <YakuHeader key={1} />],
    body: [<YakuBody key={0} />, <YakuBody key={1} />],
  };
  return (
    <div>
      <Tabs>
        <TabHeader data={data.header} />
        <TabBody data={data.body} />
      </Tabs>
    </div>
  );
};
