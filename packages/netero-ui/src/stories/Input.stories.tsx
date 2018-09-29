import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

import { Input } from "../components/Input/Input";

storiesOf("Input", module).add("simple input", () => (
  <Input placeholder="Email" />
));
