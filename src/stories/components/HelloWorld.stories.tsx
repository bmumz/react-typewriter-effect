import React from "react";
import { Meta } from "@storybook/react/types-6-0";

import { HelloWorld } from "../../components";

export const Primary: React.FC<{}> = () => (
  <div>
    <HelloWorld title="Hello World" theme="primary">
      <div>Some content</div>
    </HelloWorld>
  </div>
);

export const Secondary: React.FC<{}> = () => (
  <HelloWorld title="GN World" theme="secondary">
    <div>Some other content</div>
  </HelloWorld>
);

export default {
  title: "Components",
  component: HelloWorld,
} as Meta;
