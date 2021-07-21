import React from 'react';
import {Subscribe} from './index';


export default {
	component: Subscribe,
	title: "Call to action",
};

const Template = args => <Subscribe {...args} />;

export const Default = Template.bind({});
Default.args = {
};