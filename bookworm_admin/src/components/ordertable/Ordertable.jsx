import "./ordertable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { orderColumns,orderRows } from "../../ordertablesource";
import { Link } from "react-router-dom";
import { useState } from "react";

const Ordertable = () => {
  const [data] = useState(orderRows);

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link to="/books/test" style={{ textDecoration: "none" }}>
              <div className="viewButton">Order Fulfilment</div>
            </Link>
          </div>
        );
      },
    },
  ];
  return (
    <div className="ordertable">
      <div className="ordertableTitle">
      ORDERS
      </div>
      <DataGrid
        className="datagrid"
        rows={data}
        columns={orderColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>
  );
};

export default Ordertable;
