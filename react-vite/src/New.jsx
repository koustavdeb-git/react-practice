import { useState } from "react";

function Hello () {

    let [update, setUpdate] = useState(0)
    const increase = () => {
        // console.log("hi");
        if (update < 20) {
            setUpdate(update+1);
        }
    }
    const decrease = () => {
        // console.log("hi");
        if (update > 0) {
            setUpdate(update-1);
        }
    }
    return (
        <div className="container">
            <h1>Hello world!</h1>
            <p>Hi I'm Koustav</p> 
            <button onClick={increase}>Increase</button>
            <button onClick={decrease}>Decrease</button>
            <p>Result: {update}</p>


        </div>
    )  
}

export default Hello;