import React from "react";
import { Tab } from "../../lib/yamada-ui";
type TabHeaderProps = {
  data: JSX.Element[];
};
export const TabHeader = (props: TabHeaderProps) => {
  return (
    <div>
      {props.data.map((item, index) => {
        return <Tab key={index}>{item}</Tab>;
      })}
    </div>
  );
};
