import React from "react";

import { storiesOf } from "@storybook/react";

import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live";
import { Table } from "../components/Table/Table";
import { PropTable } from "../utils/components/PropTable";
const TableExample = `
  <Table>
    <Table.Header>
      <Table.Row>
        {["Name", "Age", "Weight", "Height"].map((header, index) => (
          <Table.Head key={index}>{header}</Table.Head>
        ))}
      </Table.Row>
    </Table.Header>
    <Table.Body>
      <Table.Row>
        {["Brian", 25, "125lb", "6'1"].map(data => (
          <Table.Data key={data}>{data}</Table.Data>
        ))}
      </Table.Row>
      <Table.Row>
        {["Jackie", 25, "110lb", "5'4"].map(data => (
          <Table.Data key={data}>{data}</Table.Data>
        ))}
      </Table.Row>
    </Table.Body>
  </Table>
`;
storiesOf("Table", module).add("Table", () => (
  <div style={{ padding: "25px", height: "250px" }}>
    <h1>Table:</h1>
    <div>
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
    <div>
      <h2>Props:</h2>
      <PropTable componentName="Table" />
    </div>
  </div>
));
