import "./summarytable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { bookColumns, bookRows } from "../../summarysource";
import { Link } from "react-router-dom";
import { useState } from "react";

const Summarytable = () => {
    const [data] = useState(bookRows);



    return (
        <div className="summarytable">
            <div className="summaryTitle">
                ORDER (Insert ID) SUMMARY
                <Link to="/users/new" className="link">
                    FULFIL
                </Link><Link to="/users/new" className="link1">
                    DECLINE
                </Link>
                <Link to="/users/new" className="link2">
                    SET TO PENDING
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
