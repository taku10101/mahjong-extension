import React from "react";
import { TabPanel } from "../../lib/yamada-ui";

type TabBodyProps = {
  data: JSX.Element[];
};
export const TabBody = (props: TabBodyProps) => {
  return (
    <div>
      {props.data.map((item, index) => {
        return <TabPanel key={index}>{item}</TabPanel>;
      })}
    </div>
  );
};
