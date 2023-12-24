import React from 'react'
import "./Leftsidebar.css"
import { NavLink } from 'react-router-dom'
import Globe from "../../assets/Globe.svg"

function Leftsidebar() {
    return (
        <div>
            <div className='left-sidebar'>
                <div className='side-nav'>

                    <NavLink to="/" className="side-nav-links" activeClassName="active">
                        <p><i class="fa-solid fa-house" style={{ marginRight: "10px" }}></i> Home </p>
                    </NavLink>

                    <NavLink to="/Questions" className="side-nav-links" activeClassName="active">
                        <p><i class="fa-solid fa-globe" style={{ marginRight: "10px" }}></i> Questions </p>
                    </NavLink>

                    <NavLink to="/Tags" className="side-nav-links" activeClassName="active">
                        <p><i class="fa-solid fa-tag" style={{ marginRight: "10px" }}></i> Tags </p>
                    </NavLink>
                    <br />



                    <NavLink to="/Saves" className="side-nav-links" activeClassName="active">
                        <p><i class="fa-solid fa-bookmark" style={{ marginRight: "10px" }}></i> Saves </p>
                    </NavLink>

                    <NavLink to="/Users" className="side-nav-links" activeClassName="active">
                        <p><i class="fa-solid fa-users" style={{ marginRight: "10px" }}></i> Users </p>
                    </NavLink>
                    <NavLink to="/Companies" className="side-nav-links" activeClassName="active">
                        <p><i class="fa-solid fa-briefcase" style={{ marginRight: "10px" }}></i> Companies </p>
                    </NavLink>




                </div>
            </div>
        </div>
    )
}

export default Leftsidebar
