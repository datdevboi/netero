import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

import { Table } from "../components/Table/Table";

storiesOf("Table", module).add("simple Table", () => (
  <div style={{ padding: "25px" }}>
    <Table>
      <Table.Header>
        <Table.Row>
          {["Name", "Age", "Weight", "Height"].map(header => (
            <Table.Head>{header}</Table.Head>
          ))}
        </Table.Row>
      </Table.Header>
      <Table.Body>
        <Table.Row>
          {["Brian", 25, "125lb", "6'1"].map(data => (
            <Table.Data styledFunc={() => `color: red`}>{data}</Table.Data>
          ))}
        </Table.Row>
      </Table.Body>
    </Table>
  </div>
));
