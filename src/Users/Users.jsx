import React from "react";
import "./User.css";
import Leftsidebar from "../components/Leftsidebar/Leftsidebar";
import UsersList from "./UsersList";
import Navbar from "../components/Navbar/Navbar";
import { useLocation } from "react-router-dom";



const Users = () => {
    const location = useLocation();
    // console.log("location: ", location);

    return (
        <>
            <Navbar />
            <div className="home-container-1">
                <Leftsidebar />
                <div className="home-container-2" style={{ marginTop: "30px" }}>
                    <h1 style={{ fontWeight: "400" }}>Users</h1>
                    <UsersList />
                </div>
            </div>
        </>

    );
};

export default Users;