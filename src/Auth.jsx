import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import icon from "./assets/icon.png"
import capcha from "./assets/capcha.png"
import "./Auth.css"
import Aboutauth from "./Aboutauth"
import { signup, login } from './actions/auth'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'


export default function Auth() {
    const [isSignup, setIssignup] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useDispatch();
    const navigate = useNavigate();


    const handleSwitch = () => {
        setIssignup(!isSignup);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!email && !password) {
            alert("Please enter your email and password!");
        }

        if (isSignup) {
            if (!name) {
                alert("Please enter your name");
            }
            dispatch(signup({ name, email, password }, navigate))
        } else {
            dispatch(login({ email, password }, navigate))
            // 1:31:06
        }
        console.log({ name, email, password });
    }




    return (
        <div>
            <Navbar />
            <section className='auth-section'>
                {
                    isSignup && <Aboutauth />
                }
                <div className='auth-container'>
                    {!isSignup && <img src={icon} alt="icon" className='login-logo' />}

                    <form onSubmit={handleSubmit}>

                        {isSignup && <>
                            <label htmlFor="name"></label>
                            <h4>Display Name</h4>
                            <input
                                type="text"
                                name='name'
                                id='name'
                                onChange={(e) => { setName(e.target.value) }}
                            />
                        </>
                        }
                        <label htmlFor="email"></label>
                        <h4>Email</h4>
                        <input
                            type="email"
                            name='email'
                            id='email'
                            onChange={(e) => { setEmail(e.target.value) }}
                        />

                        <label htmlFor="password">
                            <div className='passbox'>
                                <h4>Password</h4>
                                {!isSignup && <h4 style={{ color: "#007ac6", fontSize: "13px", fontWeight: "500", marginLeft: "150px", paddingTop: "10px" }}>Forget Password?</h4>}
                            </div>
                        </label>
                        <input
                            type="password"
                            name='password'
                            id='password'
                            onChange={(e) => { setPassword(e.target.value) }}
                        />


                        {isSignup &&
                            <>
                                <p style={{ color: "#666767", fontSize: "13px" }}>Passwords must contain at least eight characters, <br /> including at least 1 letter and 1 number.</p>
                            </>
                        }

                        {isSignup &&
                            <img src={capcha} alt="capcha" width="300px" height="150px" style={{ marginLeft: "20px", borderRadius: "10px" }} />
                        }

                        {/* 1:10:28 */}
                        {
                            isSignup &&
                            <>
                                <label htmlFor="check" style={{ display: "flex", alignItemsce: "center", justifyContent: "center" }}>
                                    <input type="checkbox" id="check" />
                                    <p style={{ color: "#666767", fontSize: "13px" }}>
                                        Opt-in to receive occasional product <br /> updates, user research invitations, company <br /> announcements, and digests.</p>
                                </label>
                            </>
                        }


                        <button type='submit' className='auth-btn'>{isSignup ? 'Sign Up' : 'Log in'}</button>
                        {
                            isSignup &&
                            <>
                                <p style={{ color: "#666767", fontSize: "13px" }}>By clicking  “Sign up”, you agree to our <span style={{ color: "#007ac6" }}>terms of <br />
                                    service</span>  and acknowledge that you have read and <br /> understand our
                                    <span style={{ color: "#007ac6" }}>privacy policy</span>  and <span>code of <br />
                                        conduct</span> .</p>
                            </>
                        }

                    </form>
                    <div style={{ display: "flex" }}>
                        <p style={{ fontSize: "13px" }}>{isSignup ? 'Already have an account?' : "Don't have an account?"}</p>
                        <button type="button" className='handle-switch-btn' onClick={handleSwitch}>
                            {isSignup ? 'Log in' : 'Sign Up'}
                        </button>
                    </div>

                    <p style={{ fontSize: "13px" }}>Are you an employer? <span style={{ color: "#007ac6" }}>
                        Sign up on Talent  <i class="fa-solid fa-arrow-up-right-from-square"></i>
                    </span> </p>

                </div>
            </section>
        </div>
    )
}