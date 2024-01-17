import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import jsonData from "./data.json";
import { Link } from "react-router-dom";

const columns = [
  {
    key: 1,
    field: "firstName",
    headerName: "First name",
    width: 150,
    // editable: true,
  },
  {
    key: 2,
    field: "lastName",
    headerName: "Last name",
    width: 150,
    // editable: true,
  },
  {
    key: 3,
    field: "age",
    headerName: "Age",
    type: "number",
    width: 110,
    // editable: true,
  },
  {
    key: 4,
    field: "1",
    headerName: "Full name",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 160,
    valueGetter: (params) =>
      `${params.row.firstName || ""} ${params.row.lastName || ""}`,
  },
  {
    key: 5,
    field: "2",
    headerName: "Full name",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 160,
    valueGetter: (params) =>
      `${params.row.firstName || ""} ${params.row.lastName || ""}`,
  },
];

export default function TabelData() {
  return (
    <Box sx={{ height: "85vh", width: "92vw" }}>
      <DataGrid
        rowHeight={35}
        rows={jsonData}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 10,
            },
          },
        }}
        pageSizeOptions={[10]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </Box>
  );
}
