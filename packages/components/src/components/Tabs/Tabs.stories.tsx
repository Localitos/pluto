import type { Meta } from "@storybook/react";
import React from "react";
import { Box } from "../../primitives/Box";
import { Heading } from "../Heading";
import { Paragraph } from "../Paragraph";
import { Tabs } from "./Tabs";
import { TabList } from "./TabList";
import { TabPanels } from "./TabPanels";
import { TabPanel } from "./TabPanel";
import { Tab } from "./Tab";

const tabs: Meta<typeof Tabs> = {
  title: "Components/Tabs",
  args: {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore Table has a required prop which confuses Storybook here.
    subcomponents: { Tab, TabList, TabPanels, TabPanel },
    component: Tabs,
  },
};

export default tabs;

export const Default = (): React.JSX.Element => {
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

export const InitialTab = (): React.JSX.Element => {
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

export const Disabled = (): React.JSX.Element => {
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

export const ReallyLongTab = (): React.JSX.Element => {
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

export const Fitted = (): React.JSX.Element => {
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

export const WithDivider = (): React.JSX.Element => {
  return (
    <Tabs>
      <TabList aria-label="Page tabs" withDivider>
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

WithDivider.parameters = {
  docs: {
    description: {
      story:
        "You can display a divider between the tabs and the content by using the `withDivider` property on the `TabList` component.",
    },
  },
};

const Tab1 = () => (
  <Box.div
    borderColor="colorBorderWeaker"
    borderStyle="borderStyleSolid"
    borderWidth="borderWidth10"
    h="100%"
    padding="space60"
    w="100%"
  >
    Tab1
  </Box.div>
);

const Tab2 = () => (
  <Box.div
    borderColor="colorBorderWeaker"
    borderStyle="borderStyleSolid"
    borderWidth="borderWidth10"
    padding="space60"
  >
    Tab2
  </Box.div>
);

export const Flexed = (): React.JSX.Element => {
  const [selectedTab, setSelectedTab] = React.useState("tab1");

  return (
    <Box.div display="flex" h="500px">
      <Tabs flexed>
        <TabList aria-label="Page tabs" withDivider>
          <Tab id="tab1" onClick={() => setSelectedTab("tab1")}>
            Tab1
          </Tab>
          <Tab id="tab2" onClick={() => setSelectedTab("tab2")}>
            Tab2
          </Tab>
        </TabList>
        <Box.div display="flex" flexDirection="column" flexGrow="1">
          {selectedTab === "tab1" ? <Tab1 /> : <Tab2 />}
        </Box.div>
      </Tabs>
    </Box.div>
  );
};

Flexed.parameters = {
  docs: {
    description: {
      story:
        "This uses {display: flex; flex-direction: column; flex-grow: 1;} for the div wrapping the tabs, to be able to fill the whole remaining container height with one of the containing divs.",
    },
  },
};
