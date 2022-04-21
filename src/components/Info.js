import React from "react"
import profileImg from "../images/profile.jpg"
import { MdEmail } from "react-icons/md"
import { FaLinkedin } from "react-icons/fa"

export default function Info() {
    return (
        <header className="info">
            <img src={profileImg} className="info-img"></img>
            <div className="info-bottom">
                <h1>Jake Collins</h1>
                <h2>Frontend Developer</h2>
                <a href="github.com" className='info-website'>jakecollins.website</a>
                <div className="info-buttons">
                    <a href="gmail.com" className="info-email"> 
                        <MdEmail/>
                        <span>Email</span>
                    </a>
                    <a href="linkedin.com" className="info-linkedin">
                        <FaLinkedin/>
                        <span>Linkedin</span>
                    </a>
                </div>
            </div>
            
        </header>
    )
}