import React from "react";
import styled from "styled-components";
import { Tabs, Tab, TabPanel } from "@yamada-ui/react";
import YakuList from "../components/YakuList";

const AppContainer = styled.div`
  background-color: #0b0f20;
  color: white;
  min-height: 100vh;
  padding: 20px;
`;

function App() {
  return (
    <AppContainer>
      <Tabs>
        <Tab>一飜役</Tab>
        <Tab>二飜役</Tab>
        <Tab>三飜役</Tab>
        <Tab>六飜役</Tab>
        <Tab>満貫</Tab>
        <Tab>役満</Tab>
        <Tab>ダブル役満</Tab>
        <Tab>流局</Tab>

        <TabPanel>
          <YakuList category={1} />
        </TabPanel>
        <TabPanel>
          <YakuList category={2} />
        </TabPanel>
      </Tabs>
    </AppContainer>
  );
}

export default App;
