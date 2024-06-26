import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react"
import React from "react"
import styled from "styled-components"

import YakuList from "./YakuList"

function Index() {
  const tabHeader = [
    "一飜役",
    "二飜役",
    "三飜役",
    "六飜役",
    "満貫",
    "役満",
    "ダブル役満",
    "流局"
  ]

  return (
    <AppContainer>
      <Tabs>
        <TabList>
          {tabHeader.map((header) => (
            <Tab
              sx={{
                fontSize: "18px"
              }}
              key={header}>
              {header}
            </Tab>
          ))}
        </TabList>
        <TabPanels>
          {tabHeader.map((header, index) => (
            <TabPanel key={header}>
              <YakuList index={index} />
            </TabPanel>
          ))}
        </TabPanels>
      </Tabs>
    </AppContainer>
  )
}

export default Index

const AppContainer = styled.div`
  background-color: #06070a;
  color: white;
  height: 400px;
  padding: 20px;
  width: 780px;
  overflow: auto;
`
