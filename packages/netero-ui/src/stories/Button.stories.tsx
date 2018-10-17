import * as React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import { Button } from "../components/Button/Button";

import { CodeExample } from "../utils/components/CodeExample";

const scope = { Button };

storiesOf("Button", module).add("Button", () => (
  <CodeExample scope={scope} componentName="Button" />
));
