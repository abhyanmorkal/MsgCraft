import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import { userColomn, userRow } from "./dataSources";

export default function TabelData() {
  return (
    <Box sx={{ height: "85vh", width: "92vw" }}>
      <DataGrid
        rowHeight={35}
        rows={userRow}
        columns={userColomn}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 15,
            },
          },
        }}
        pageSizeOptions={[15]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </Box>
  );
}
