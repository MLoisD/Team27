import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/styles";
import { TextField, Button, Grid } from "@material-ui/core";
import "./users.scss"


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1
    }
}));
const EditUserForm = (props) => {
    const initialFormState = { id: null, firstName: "", lastName: "", username: "", email: "", phone: "", address: "" };
    const [user, setUser] = useState(initialFormState);

    useEffect(() => {
        setUser(props.currentUser);
    }, [props]);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setUser({ ...user, [name]: value });
    };
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <form
                onSubmit={(event) => {
                    event.preventDefault();
                    if (!props.editing) {
                        if (!user.firstName || !user.lastName) return;
                        props.addUser(user);
                        setUser(initialFormState);
                    } else {
                        props.updateUser(user.id, user);
                    }
                }}
            >
                <Grid
                    container
                    spacing={3}
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                >
                    <Grid item xs>
                        <TextField
                            id="standard-basic"
                            label="First Name"
                            name="firstName"
                            value={user.firstName}
                            onChange={handleInputChange}
                        />
                    </Grid>
                    <Grid item xs>
                        <TextField
                            id="standard-basic"
                            label="Last Name"
                            name="lastName"
                            value={user.lastName}
                            onChange={handleInputChange}
                        />
                    </Grid>
                    <Grid item xs>
                        <TextField
                            id="standard-basic"
                            label="Username"
                            name="username"
                            value={user.username}
                            onChange={handleInputChange}
                        />
                    </Grid>
                    <Grid item xs>
                        <TextField
                            id="standard-basic"
                            label="Email"
                            name="email"
                            value={user.email}
                            onChange={handleInputChange}
                        />
                    </Grid>
                    <Grid item xs>
                        <TextField
                            id="standard-basic"
                            label="Phone"
                            name="phone"
                            value={user.phone}
                            onChange={handleInputChange}
                        />
                    </Grid>
                    <Grid item xs>
                        <TextField
                            id="standard-basic"
                            label="Address"
                            name="address"
                            value={user.address}
                            onChange={handleInputChange}
                         />
                    </Grid>

                    <Grid item xs>
                        <Button
                            type="submit"
                            size="small"
                            variant="contained"
                            color="#568259"
                        >
                            {props.editing ? " Update user" : "Add edit user"}
                        </Button>
                    </Grid>
                    <Grid item xs>
                        <Button onClick={() => props.setCurrentUser(initialFormState)}>
                            Reset
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </div>
    );
};

export default EditUserForm;
