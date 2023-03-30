import { Link } from "react-router-dom";
import { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { bookColumns, bookRows } from "../../summarysource";

import "./summarytable.scss";
const Summarytable = () => {
    const [data] = useState(bookRows);



    return (
        <div className="summarytable">
            <div className="summaryTitle">
                ORDER 9257934 SUMMARY
                <Link to="" className="link">
                    FULFIL
                </Link><Link to="" className="link1">
                    DECLINE
                </Link>
                <Link to="" className="link2">
                    SET TO PENDING
                </Link>
                <Link to="" className="link3">
                    BACK TO ORDERS
                </Link>
            </div>
            <DataGrid
                className="datagrid"
                rows={data}
                columns={bookColumns}
                pageSize={9}
                rowsPerPageOptions={[9]}
                checkboxSelection
            />
        </div>
    );
};

export default Summarytable;
