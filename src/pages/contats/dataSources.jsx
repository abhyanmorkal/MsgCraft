import * as React from "react";
import Drawer from "@mui/material/Drawer";
import icon from "../../assets/setting.svg";
export const userColomn = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "name",
    headerName: "Name",
    width: 200,
    renderCell: (params) => {
      return <ActionsCell row={params.row} />;
    },
  },
  {
    field: "whatsapp",
    headerName: "WhatsApp",
    width: 200,
  },
  {
    field: "status",
    headerName: "Status",
    width: 100,
  },
  {
    field: "email",
    headerName: "Email",
    width: 200,
  },
  {
    field: "address",
    headerName: "Address",
    width: 200,
  },
  {
    field: "instuteName",
    headerName: "Institute Name",
    width: 200,
  },
  {
    field: "label",
    headerName: "Label",
    width: 100,
  },
  {
    field: "note",
    headerName: "Note",
    width: 300,
    renderCell: () => {
      return (
        <div style={{ width: "100%", boder: "none" }}>
          <form>
            <textarea />
          </form>
        </div>
      );
    },
  },
];

export const userRow = [
  {
    id: 1,
    name: "Abhyan Morkal",
    path: "?hash=",
    whatsapp: "+911234567001",
    status: "active",
    email: "xyz@gmail.com",
    address: "xyz",
    instuteName: "xyz University",
    label: "calling",
    note: "xyz",
  },
  {
    id: 2,
    name: "Abhyan Morkal",
    whatsapp: "+911234567001",
    status: "active",
    email: "xyz@gmail.com",
    address: "xyz",
    instuteName: "xyz University",
    label: "calling",
    note: "xyz",
  },
  {
    id: 3,
    name: "Abhyan Morkal",
    whatsapp: "+911234567001",
    status: "active",
    email: "xyz@gmail.com",
    address: "xyz",
    instuteName: "xyz University",
    label: "calling",
    note: "xyz",
  },
  {
    id: 4,
    name: "Abhyan Morkal",
    whatsapp: "+911234567001",
    status: "active",
    email: "xyz@gmail.com",
    address: "xyz",
    instuteName: "xyz University",
    label: "calling",
    note: "xyz",
  },
  {
    id: 5,
    name: "Abhyan Morkal",
    whatsapp: "+911234567001",
    status: "active",
    email: "xyz@gmail.com",
    address: "xyz",
    instuteName: "xyz University",
    label: "calling",
    note: "xyz",
  },
  {
    id: 6,
    name: "Abhyan Morkal",
    whatsapp: "+911234567001",
    status: "active",
    email: "xyz@gmail.com",
    address: "xyz",
    instuteName: "xyz University",
    label: "calling",
    note: "xyz",
  },
  {
    id: 7,
    name: "Abhyan Morkal",
    whatsapp: "+911234567001",
    status: "active",
    email: "xyz@gmail.com",
    address: "xyz",
    instuteName: "xyz University",
    label: "calling",
    note: "xyz",
  },
  {
    id: 8,
    name: "Abhyan Morkal",
    whatsapp: "+911234567001",
    status: "active",
    email: "xyz@gmail.com",
    address: "xyz",
    instuteName: "xyz University",
    label: "calling",
    note: "xyz",
  },
  {
    id: 9,
    name: "Abhyan Morkal",
    whatsapp: "+911234567001",
    status: "active",
    email: "xyz@gmail.com",
    address: "xyz",
    instuteName: "xyz University",
    label: "calling",
    note: "xyz",
  },
  {
    id: 10,
    name: "Abhyan Morkal",
    whatsapp: "+911234567001",
    status: "active",
    email: "xyz@gmail.com",
    address: "xyz",
    instuteName: "xyz University",
    label: "calling",
    note: "xyz",
  },
  {
    id: 11,
    name: "Abhyan Morkal",
    whatsapp: "+911234567001",
    status: "active",
    email: "xyz@gmail.com",
    address: "xyz",
    instuteName: "xyz University",
    label: "calling",
    note: "xyz",
  },
  {
    id: 12,
    name: "Abhyan Morkal",
    whatsapp: "+911234567001",
    status: "active",
    email: "xyz@gmail.com",
    address: "xyz",
    instuteName: "xyz University",
    label: "calling",
    note: "xyz",
  },
  {
    id: 13,
    name: "Abhyan Morkal",
    whatsapp: "+911234567001",
    status: "active",
    email: "xyz@gmail.com",
    address: "xyz",
    instuteName: "xyz University",
    label: "calling",
    note: "xyz",
  },
  {
    id: 14,
    name: "Abhyan Morkal",
    whatsapp: "+911234567001",
    status: "active",
    email: "xyz@gmail.com",
    address: "xyz",
    instuteName: "xyz University",
    label: "calling",
    note: "xyz",
  },
  {
    id: 15,
    name: "Abhyan Morkal",
    whatsapp: "+911234567001",
    status: "active",
    email: "xyz@gmail.com",
    address: "xyz",
    instuteName: "xyz University",
    label: "calling",
    note: "xyz",
  },
  {
    id: 16,
    name: "Abhyan Morkal",
    whatsapp: "+911234567001",
    status: "active",
    email: "xyz@gmail.com",
    address: "xyz",
    instuteName: "xyz University",
    label: "calling",
    note: "xyz",
  },
  {
    id: 17,
    name: "Abhyan Morkal",
    whatsapp: "+911234567001",
    status: "active",
    email: "xyz@gmail.com",
    address: "xyz",
    instuteName: "xyz University",
    label: "calling",
    note: "xyz",
  },
  {
    id: 18,
    name: "Abhyan Morkal",
    whatsapp: "+911234567001",
    status: "active",
    email: "xyz@gmail.com",
    address: "xyz",
    instuteName: "xyz University",
    label: "calling",
    note: "xyz",
  },
  {
    id: 19,
    name: "Abhyan Morkal",
    whatsapp: "+911234567001",
    status: "active",
    email: "xyz@gmail.com",
    address: "xyz",
    instuteName: "xyz University",
    label: "calling",
    note: "xyz",
  },
  {
    id: 20,
    name: "Abhyan Morkal",
    whatsapp: "+911234567001",
    status: "active",
    email: "xyz@gmail.com",
    address: "xyz",
    instuteName: "xyz University",
    label: "calling",
    note: "xyz",
  },
];

function ActionsCell({ row }) {
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const handleOpenDrawer = () => {
    setDrawerOpen(true);
  };

  const handleCloseDrawer = () => {
    setDrawerOpen(false);
  };

  return (
    <div>
      <div
        onClick={handleOpenDrawer}
        style={{
          display: "flex",
          alignItems: "center",
          gap: "50px",
          padding: "1rem",
          cursor: "pointer",
        }}
      >
        {row.name}
        <img
          src={icon}
          alt="icon"
          style={{
            width: "15px",
            height: "15px",
          }}
        />
      </div>
      <Drawer anchor="right" open={drawerOpen} onClose={handleCloseDrawer}>
        <div style={{ wiedth: "340px" }}>
          <p>Information</p>
          {row.name}
          {/* Add additional information from the row as needed */}
        </div>
      </Drawer>
    </div>
  );
}
