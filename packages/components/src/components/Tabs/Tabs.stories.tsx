import type { ComponentMeta } from "@storybook/react";
import React from "react";
import { Box } from "../../primitives/Box";
import { Heading } from "../Heading";
import { Paragraph } from "../Paragraph";
import { Tabs } from "./Tabs";
import { TabList } from "./TabList";
import { TabPanels } from "./TabPanels";
import { TabPanel } from "./TabPanel";
import { Tab } from "./Tab";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore TabList has a required prop which confuses Storybook here.
export default {
  component: Tabs,
  subcomponents: { Tab, TabList, TabPanels, TabPanel },
  title: "Components/Tabs",
} as ComponentMeta<typeof Tabs>;

export const Default = (): JSX.Element => {
  return (
    <Tabs>
      <TabList aria-label="Page tabs">
        <Tab>Tab One</Tab>
        <Tab>Tab Two</Tab>
        <Tab>Tab Three</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          <Box.div padding="space60">
            <Heading as="h2" marginBottom="space0" size="heading50">
              Tab One
            </Heading>
            <Paragraph>
              Lorem ipsum dolor sit, consectetur. Aliquam ac a. Ligula at et,
              sodales vel purus.
            </Paragraph>
          </Box.div>
        </TabPanel>
        <TabPanel>
          <Box.div padding="space60">
            <Heading as="h2" marginBottom="space0" size="heading50">
              Tab Two
            </Heading>
            <Paragraph>
              Lorem ipsum dolor sit, consectetur. Aliquam ac a. Ligula at et,
              sodales vel purus.
            </Paragraph>
          </Box.div>
        </TabPanel>
        <TabPanel>
          <Box.div padding="space60">
            <Heading as="h2" marginBottom="space0" size="heading50">
              Tab Three
            </Heading>
            <Paragraph>
              Lorem ipsum dolor sit, consectetur. Aliquam ac a. Ligula at et,
              sodales vel purus.
            </Paragraph>
          </Box.div>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};

export const InitialTab = (): JSX.Element => {
  const selectedTab = "selected-tab";
  return (
    <Tabs initialTabId={selectedTab}>
      <TabList aria-label="Page tabs">
        <Tab>Tab One</Tab>
        <Tab id={selectedTab}>Tab Two</Tab>
        <Tab>Tab Three</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          <Box.div padding="space60">
            <Heading as="h2" marginBottom="space0" size="heading50">
              Tab One
            </Heading>
            <Paragraph>
              Lorem ipsum dolor sit, consectetur. Aliquam ac a. Ligula at et,
              sodales vel purus.
            </Paragraph>
          </Box.div>
        </TabPanel>
        <TabPanel>
          <Box.div padding="space60">
            <Heading as="h2" marginBottom="space0" size="heading50">
              Tab Two
            </Heading>
            <Paragraph>
              Lorem ipsum dolor sit, consectetur. Aliquam ac a. Ligula at et,
              sodales vel purus.
            </Paragraph>
          </Box.div>
        </TabPanel>
        <TabPanel>
          <Box.div padding="space60">
            <Heading as="h2" marginBottom="space0" size="heading50">
              Tab Three
            </Heading>
            <Paragraph>
              Lorem ipsum dolor sit, consectetur. Aliquam ac a. Ligula at et,
              sodales vel purus.
            </Paragraph>
          </Box.div>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};

export const Disabled = (): JSX.Element => {
  return (
    <Tabs>
      <TabList aria-label="Page tabs">
        <Tab>Tab One</Tab>
        <Tab disabled>Tab Two</Tab>
        <Tab>Tab Three</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          <Box.div padding="space60">
            <Heading as="h2" marginBottom="space0" size="heading50">
              Tab One
            </Heading>
            <Paragraph>
              Lorem ipsum dolor sit, consectetur. Aliquam ac a. Ligula at et,
              sodales vel purus.
            </Paragraph>
          </Box.div>
        </TabPanel>
        <TabPanel>
          <Box.div padding="space60">
            <Heading as="h2" marginBottom="space0" size="heading50">
              Tab Two
            </Heading>
            <Paragraph>
              Lorem ipsum dolor sit, consectetur. Aliquam ac a. Ligula at et,
              sodales vel purus.
            </Paragraph>
          </Box.div>
        </TabPanel>
        <TabPanel>
          <Box.div padding="space60">
            <Heading as="h2" marginBottom="space0" size="heading50">
              Tab Three
            </Heading>
            <Paragraph>
              Lorem ipsum dolor sit, consectetur. Aliquam ac a. Ligula at et,
              sodales vel purus.
            </Paragraph>
          </Box.div>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};

export const ReallyLongTab = (): JSX.Element => {
  return (
    <Tabs>
      <TabList aria-label="Page tabs">
        <Tab>Tab One</Tab>
        <Tab>Lorem ipsum dolor sit dolor, consectetur consectetur dolor</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          <Box.div padding="space60">
            <Heading as="h2" marginBottom="space0" size="heading50">
              Tab One
            </Heading>
            <Paragraph>
              Lorem ipsum dolor sit, consectetur. Aliquam ac a. Ligula at et,
              sodales vel purus.
            </Paragraph>
          </Box.div>
        </TabPanel>
        <TabPanel>
          <Box.div padding="space60">
            <Heading as="h2" marginBottom="space0" size="heading50">
              Tab Two
            </Heading>
            <Paragraph>
              Lorem ipsum dolor sit, consectetur. Aliquam ac a. Ligula at et,
              sodales vel purus.
            </Paragraph>
          </Box.div>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};

export const Fitted = (): JSX.Element => {
  return (
    <Tabs variant="fitted">
      <TabList aria-label="Page tabs">
        <Tab>Tab One</Tab>
        <Tab>Tab Two</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          <Box.div padding="space60">
            <Heading as="h2" marginBottom="space0" size="heading50">
              Tab One
            </Heading>
            <Paragraph>
              Lorem ipsum dolor sit, consectetur. Aliquam ac a. Ligula at et,
              sodales vel purus.
            </Paragraph>
          </Box.div>
        </TabPanel>
        <TabPanel>
          <Box.div padding="space60">
            <Heading as="h2" marginBottom="space0" size="heading50">
              Tab Two
            </Heading>
            <Paragraph>
              Lorem ipsum dolor sit, consectetur. Aliquam ac a. Ligula at et,
              sodales vel purus.
            </Paragraph>
          </Box.div>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};
