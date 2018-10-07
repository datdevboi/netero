import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";
import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live";
import { Table } from "../components/Table/Table";

const TableExample = `
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
          <Table.Data>{data}</Table.Data>
        ))}
      </Table.Row>
      <Table.Row>
        {["Jackie", 25, "110lb", "5'4"].map(data => (
          <Table.Data>{data}</Table.Data>
        ))}
      </Table.Row>
    </Table.Body>
  </Table>
`;
storiesOf("Table", module).add("Table", () => (
  <div style={{ padding: "25px", height: "250px" }}>
    <h1>Table:</h1>
    <LiveProvider
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "100%"
      }}
      scope={{ Table }}
      code={TableExample.toString()}
    >
      <LivePreview />
      <LiveEditor />
      <LiveError />
    </LiveProvider>
  </div>
));
