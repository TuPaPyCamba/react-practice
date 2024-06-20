import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));

function Greeting() {
    const user = true

    return <div>
        <h1>{user.firstName}</h1>
    </div>
}

root.render(<Greeting />);
