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
  <div style={{ padding: "25px", height: "100%" }}>
    <h1>Table</h1>
    <div>
      <h3>Description:</h3>
      <p>
        Table component is a compound Component.It has a couple of internal
        components it exposes to the user:
      </p>
      <p />
      <ul>
        <li>Table.Header</li>
        <li>Table.Head</li>
        <li>Table.Body</li>
        <li>Table.Row</li>
        <li>Table.Data</li>
        <li>Table.Foot</li>
      </ul>
      <p>
        Each of these components have the <strong>StyledFunc</strong> prop that
        will inject the style into the component
      </p>
    </div>
    <h3>Usage:</h3>
    <pre>{`import {Table} from 'netero-ui'`}</pre>
    <div>
      <LiveProvider
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          height: "100%"
        }}
        scope={{ Table }}
        code={TableExample}
      >
        <LivePreview />
        <hr />
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
