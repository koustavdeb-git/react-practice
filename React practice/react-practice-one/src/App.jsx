import React, { useState } from "react"
import Products from "./Prducts"


function Hey() {
    var [a,b] = useState(false);
    return (
        <div>
            <div className="w-full h-screen bg-zinc-700"></div>
            <h1>{a === true ? "Hello" : "False"}</h1>
            <Products />
        </div>
    )
}

export default Hey