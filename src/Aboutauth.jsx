import React from 'react'
import "./Auth.css"

function Aboutauth() {
    return (
        <div>
            <div className='auth-container-1'>
                <h1> Join the Stack Overflow community</h1>
                <p><i class="fa-solid fa-message" style={{ color: "#007ac6", marginRight: "10px" }}></i>Get unstuck — ask a question</p>
                <p><i class="fa-solid fa-angle-up" style={{ color: "#007ac6", marginRight: "10px" }}></i>Unlock new privileges like voting and commenting</p>
                <p> <i class="fa-solid fa-tag" style={{ color: "#007ac6", marginRight: "10px" }}></i>Save your favorite questions, answers, watch tags, and more</p>
                <p><i class="fa-solid fa-trophy" style={{ color: "#007ac6", marginRight: "10px" }}></i>Earn reputation and badges</p>
                <p style={{ fontSize: "10px" }}>Collaborate and share knowledge with a private group for FREE.</p>
                <p style={{ color: "#007ac6", fontSize: "10px" }}>Get Stack Overflow for Teams free for up to 50 users.</p>
            </div>
        </div>
    )
}

export default Aboutauth
