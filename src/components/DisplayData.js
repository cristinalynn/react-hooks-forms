import React from "react";

function Displaydata({ firstName, lastName}) {
    return (
        <div>
            <h1>{firstName}</h1>
            <h1>{lastName}</h1>
        </div>
    )
}

export default Displaydata;