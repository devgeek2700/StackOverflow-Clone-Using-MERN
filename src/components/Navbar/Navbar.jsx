import React, { useEffect } from 'react'
import { Link, useNavigate } from "react-router-dom"
import logo from "../../assets/logo.png"
import Avatar from '../../components/Avatar/Avatar';
import "./Navbar.css"
import { useSelector, useDispatch } from 'react-redux';
import { setCurrentUser } from '../../actions/Currentusers';
import { jwtDecode } from "jwt-decode";

function Navbar() {

    const dispatch = useDispatch();
    const Navigate = useNavigate();

    let User = useSelector((state) => (state.CurrentusersReducer))

    useEffect(() => {
        const token = User?.token
        if (token) {
            const decodedToken = jwtDecode(token);
            if (decodedToken.exp * 1000 < new Date().getTime()) {
                handleLogout();
            }
        }
        dispatch(setCurrentUser(JSON.parse(localStorage.getItem('Profile'))))
    }, [dispatch])


    const handleLogout = () => {
        dispatch({ type: "LOGOUT" });
        Navigate("/");
        dispatch(setCurrentUser(null));
    };



    return (
        <div>
            <nav>
                <div className='navbar'>
                    <Link to="/" className='nav-item nav-logo'></Link>
                    <img src={logo} alt="logo" />
                    <Link to="/" className='nav-item nav-btn'>About</Link>
                    <Link to="/" className='nav-item nav-btn'>Products</Link>
                    <Link to="/" className='nav-item nav-btn'>For Teams</Link>
                    <form>
                        <i class="fa-solid fa-magnifying-glass search-icon "></i>
                        <input type="text" placeholder='Search...' />
                    </form>
                    {
                        User === null ?
                            <>
                                <Link to="/Auth" className='nav-item nav-links'>Log in  </Link>
                                <Link to="/Auth/signup" className='nav-item nav-links' id='signupbtn'>Sign up  </Link>
                            </>
                            :
                            <>
                                <Link to={`/Users/${User?.result?._id}`} className='avatorlogo'> <Avatar backgroundColor="#009dff" px="12px" py="7px" borderRadius="50%" color="white">  {User.result.name.charAt(0).toUpperCase()}  </Avatar> </Link>
                                <button className='nav-item nav-links' onClick={handleLogout}>Log out</button>
                            </>
                    }
                </div>
            </nav>
        </div>
    )
}

export default Navbar
