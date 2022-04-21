import React from "react";
import { FaTwitterSquare, FaFacebookSquare, FaInstagramSquare, FaGithubSquare } from "react-icons/fa"

// Twitter, Facebook, IG, Github

export default function Footer() {

    const iconStyle = { fontSize: "2em", marginLeft: "7px", marginRight: "7px", color:"rgb(148, 148, 148)"}

    return (
        <footer className="footer">
            <FaTwitterSquare style={iconStyle}/>
            <FaFacebookSquare style={iconStyle}/>
            <FaInstagramSquare style={iconStyle}/>
            <FaGithubSquare style={iconStyle}/>
        </footer>
    )
}