import React from 'react';

import { Sample } from './Sample';

export default {
  title: 'Sample',
  component: Sample,
};

const Template = (args) => <Sample {...args} />;

export const Simple = Template.bind({});
Simple.args = {
  label: 'label',
};

