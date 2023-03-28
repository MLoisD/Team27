import React from "react";
import "./usertable.scss";
import { makeStyles } from "@material-ui/core/styles";

import {
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableRow,
    TableHead,
    Button
} from "@material-ui/core";


const useStyles = makeStyles((theme) => ({
    root: {
        fontSize: '200pt',
        flexGrow: 1
    },
    typography: {
        // In Chinese and Japanese the characters are usually larger,
        // so a smaller fontsize may be appropriate.
        fontFamily: 'Raleway, Arial',
        fontSize: 12,
    },
    table: {
        minWidth: 500,
       fontSize: "10px" ,
    },
    paper: {
        padding: theme.spacing(5),
        textAlign: "center",
        color: theme.palette.text.secondary

    }
}));
const UserTable = (props) => {
    const classes = useStyles();
    return (
        <TableContainer className={classes.root} component={Paper}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>ID</TableCell>
                        <TableCell align="right">FIRST NAME</TableCell>
                        <TableCell align="right">LAST NAME</TableCell>
                        <TableCell align="right">USERNAME</TableCell>
                        <TableCell align="right">EMAIL</TableCell>
                        <TableCell align="right">PHONE</TableCell>
                        <TableCell align="right">ADDRESS</TableCell>
                        <TableCell align="right">ACTION</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody className="usertableTitle">
                    {props.users.map((row) => (
                        <TableRow key={row.id}>
                            <TableCell component="th" scope="row">
                                {row.id}
                            </TableCell>
                            <TableCell align="right">{row.firstName}</TableCell>
                            <TableCell align="right">{row.lastName}</TableCell>
                            <TableCell align="right">{row.username}</TableCell>
                            <TableCell align="right">{row.email}</TableCell>
                            <TableCell align="right">{row.phone}</TableCell>
                            <TableCell align="right">{row.address}</TableCell>
                            <TableCell align="right">
                                {" "}
                                <Button color="primary" onClick={() => props.editRow(row)}>
                                    Edit
                                </Button>
                                <Button onClick={() => props.deleteUser(row.id)}>Delete</Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default UserTable;
