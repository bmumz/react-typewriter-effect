import React from 'react';
import {Meta} from '@storybook/react/types-6-0';
import TypewriterEffect from '../components/TypewriterEffect';

export const Primary: React.FC = () => (
    <TypewriterEffect
        statements={[
            'I am passionate about UI/UX design.',
            'I love keeping up with best practices.',
            'I enjoy learning new technologies.'
        ]}
    />
);

export default {
    title: 'Typewriter',
    component: TypewriterEffect
} as Meta;
