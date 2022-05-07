import React from "react"


export default function WindowTracker() {
    
    const [windowWidth, setWindowWidth] = React.useState(window.innerWidth)

    React.useEffect(()=>{
    
        const watchWindowWidth = () => {
            setWindowWidth(window.innerWidth)
            //console.log(windowWidth)
        }

        window.addEventListener("resize", watchWindowWidth)

        //Cleaning up when WindowTracker component is unmounted from DOM
        return () => {
            window.removeEventListener("resize", watchWindowWidth)
        }
    },[])
    
    return (
        <h1>Window width: {windowWidth}</h1>
    )
}
