import "./booktable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { bookColumns, bookRows } from "../../datatablesource";
import {Link, useNavigate, useParams} from "react-router-dom";
import { useState } from "react";

const Booktable = () => {
  const [data, setData] = useState(bookRows);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };



  const setId = (params) => {
     const dataArray = data.filter((item) => item.id === params.row.id);
     const id  = dataArray.map((item)  => item.id)
      return id
  }

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link to={`${setId(params)}`} style={{ textDecoration: "none" }}>
              <div className="viewButton">View</div>
            </Link>
            <div
              className="deleteButton"
              onClick={() => handleDelete(params.row.id)}
            >
              Delete
            </div>
          </div>
        );
      },
    },
  ];
  return (
    <div className="booktable">
      <div className="booktableTitle">
        BOOKS
        <Link to="/new" className="link">
          Add New
        </Link>
      </div>
      <DataGrid
        className="datagrid"
        rows={data}
        columns={bookColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>
  );
};

export default Booktable;
