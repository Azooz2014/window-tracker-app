import './style.css';
import React from "react"
import WindowTracker from "./WindowTracker"

export default function App() {
    
    const [show, setShow] = React.useState(true)
    
    const toggleShow = () => {
        setShow(prevState => !prevState)
        console.log(show)
    }
    
    return (
        <div className="container">
            <button onClick={toggleShow}>
                Toggle WindowTracker
            </button>
            {show ? <WindowTracker /> : ""}
        </div>
    )
  }