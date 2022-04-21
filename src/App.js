import React from "react"
import Info from "./components/Info"
import About from "./components/About"
import Footer from "./components/Footer"
import Interests from "./components/Interests"

import "./style.css"


export default function App() {
    return (
        <div className="container">
            <Info/>
            <About/>
            <Interests/>
            <Footer/>
        </div>
    )
}