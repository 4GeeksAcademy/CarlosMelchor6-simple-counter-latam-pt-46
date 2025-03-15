import React from "react";

export const ContainerTime = () => {

    let count = 0;
    setInterval(() => {
        count = count + 1
        document.getElementById("Count").innerText = count
    }, 1000)
    return (
        <div id="Count"
            className="d-flex justify-content-center align-items-center text-white mx-4"
            style={{ height: "20vh", width: "13vh", borderRadius: "2vh", border: " 5px solid gray" }}
        >
            0
        </div>
    )
}