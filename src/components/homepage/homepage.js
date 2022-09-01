import React from "react"
import { useNavigate } from "react-router-dom"
import "./homepage.css"

const Homepage = () => {
    const navigate = useNavigate()
    return (
        <div className="homepage">
            <h1>Hello You are in HomePage</h1>
            <marquee className="marq"> Hello welcome to the page</marquee>
            <div className="button" onClick={() => navigate("/register")} >Logout</div>
        </div>
    )
}

export default Homepage