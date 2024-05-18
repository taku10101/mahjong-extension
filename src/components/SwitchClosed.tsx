import React from "react";

import styled from "styled-components";
import { Button, Switch } from "@yamada-ui/react";
import { useBoolean } from "@yamada-ui/react";
export const SwitchClosed = () => {
  const [flg, { on, off, toggle }] = useBoolean(true);

  return (
    <div>
      <Switch
        onClick={() => {
          toggle();
          if (flg) {
            (e: { stopPropagation: () => any }) => e.stopPropagation();
          }
        }}
      >
        basic
      </Switch>
    </div>
  );
};
