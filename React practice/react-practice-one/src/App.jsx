import React, { useState } from "react"
import Products from "./Prducts"


function Hey() {

    const add = document.querySelector('.add-btn').addEventListener('click', ()=> {
        console.log("hey");
    })


    return (
        <div>
            <h1 className="p-3">The counter is: {count}</h1>
            <div className="m-4">
                <button className="add-btn btn btn-success">Add {count}</button>
                <button className="reduce-btn mx-3 btn btn-danger">Reduce</button>
            </div>
        </div>
    )
}

export default Hey