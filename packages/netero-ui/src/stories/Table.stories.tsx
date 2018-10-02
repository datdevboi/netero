import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";
import { withInfo } from "@storybook/addon-info";

import { Table } from "../components/Table/Table";

storiesOf("Table", module).add("simple Table", () => (
  <div style={{ padding: "25px" }}>
    <Table />
  </div>
));
