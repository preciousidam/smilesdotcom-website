import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';

import {LinkButton} from './index';

export default {
	component: LinkButton,
	title: "Link Button",
    decorator: [story => <Router>{story()}</Router>]
};

const Template = args => <LinkButton {...args} />;

export const Default = Template.bind({});
Default.args = {
	title: "Learn More",
    delay:2
};

export const Animated = Template.bind({});
Animated.args = {
    ...Default.args,
    animation_class: "animate__fadeIn"
}

export const Loading = Template.bind({});
Loading.args = {
    ...Animated.args,
    loading: true
}