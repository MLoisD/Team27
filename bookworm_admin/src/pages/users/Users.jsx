import React, { useState } from "react";
import UserTable from "../../components/usertable/Usertable";
import "./users.scss"
import EditUserForm from "./EditUserForm";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar"
const Home = () => {
    const usersData = [
        { id: 1, firstName: "John", lastName: "Jackson" , username:"johnjackson", email:"johnjackson@gmail.com", phone: "07912345678", address: "Aston ST, Birmingham, B4 7ET"},

    ];

    const [users, setUsers] = useState(usersData);
    const [editing, setEditing] = useState(false);
    const initialFormState = { id: null, firstName: "", lastName: "", username: "", email: "", phone: "", address: "" };
    const [currentUser, setCurrentUser] = useState(initialFormState);

    const addUser = (user) => {
        user.id = users.length + 1;
        setUsers([...users, user]);
    };

    const editRow = (user) => {
        setEditing(true);
        setCurrentUser({
            id: user.id,
            firstName: user.firstName,
            lastName: user.lastName,
            username: user.username,
            email: user.email,
            phone: user.phone,
            address: user.address,


        });
    };
    const updateUser = (id, updateUser) => {
        setEditing(false);
        setCurrentUser(initialFormState);
        setUsers(users.map((user) => (user.id === id ? updateUser : user)));
    };

    const deleteUser = (id) => {
        setUsers(users.filter((user) => user.id !== id));
    };

    return (

        <div className="users">
            <Sidebar/>
            <div className="usersContainer">
                <Navbar/>
                <div className="title">
                    USERS
                </div>
                    <div className="top">
                        <EditUserForm
                            addUser={addUser}
                            editing={editing}
                            setCurrentUser={setCurrentUser}
                            currentUser={currentUser}
                            updateUser={updateUser}
                        />
                    </div>
                    <div className="bottom">
                        <h2 className="title">VIEW USER</h2>
                        <UserTable users={users} deleteUser={deleteUser} editRow={editRow} />
                    </div>
            </div>
        </div>

    );
};

export default Home;
