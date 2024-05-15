import { Tabs, TabList, Tab, TabPanels, TabPanel } from '@chakra-ui/react';
import React from 'react';
import { YakuMain } from './yaku/YakuMain';

const tabs = [
  {
    title: 'Home',
    content: <YakuMain />,
  },
  {
    title: 'About',
    content: <YakuMain />,
  },
  {
    title: 'Contact',
    content: <YakuMain />,
  },
];

export const Home = () => {
  return (
    <Tabs>
      <TabPanels>
        <TabList>
          {tabs.map((tab, index) => (
            <Tab key={index}>{tab.title}</Tab>
          ))}
        </TabList>

        <TabPanels TabPanels></TabPanels>
      </TabPanels>
    </Tabs>
  );
};
