import { Tabs, TabList, Tab, TabPanels, TabPanel } from '@chakra-ui/react';
import React from 'react';

const tabs = [
  {
    title: 'Home',
    content: 'Home content',
  },
  {
    title: 'About',
    content: 'About content',
  },
  {
    title: 'Contact',
    content: 'Contact content',
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

        <TabPanels TabPanels>
          {tabs.map((tab, index) => (
            <TabPanel key={index}>{tab.content}</TabPanel>
          ))}
        </TabPanels>
      </TabPanels>
    </Tabs>
  );
};
