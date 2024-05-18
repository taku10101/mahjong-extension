import React from "react";
import styled from "styled-components";
import { Tabs, Tab, TabPanel } from "@yamada-ui/react";
import YakuList from "../components/YakuList";

function Index() {
  const tabHeader = [
    "一飜役",
    "二飜役",
    "三飜役",
    "六飜役",
    "満貫",
    "役満",
    "ダブル役満",
    "流局",
  ];

  return (
    <AppContainer>
      <Tabs>
        {tabHeader.map((header, index) => (
          <Tab key={index} label={header}>
            <TabPanel>
              <YakuList index={index} />
            </TabPanel>
          </Tab>
        ))}
      </Tabs>
    </AppContainer>
  );
}

export default Index;

const AppContainer = styled.div`
  background-color: #0b0f20;
  color: white;
  height: 400px;
  padding: 20px;
  width: 750px;
  overflow: auto;
`;
