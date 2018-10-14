import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import { Button } from "../components/Button/Button";

import { CodeExample } from "../utils/components/CodeExample";

const code = `<Button onClick={action("clicked")}>Hello Button</Button>`;
storiesOf("Button", module).add("Button", () => (
  <CodeExample code={code} scope={{ Button, action }} componentName="Button" />
));
