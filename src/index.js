import React from "react";
import ReactDOM from "react-dom/client";
import { Greeting, UserCard } from "./Greeting";
import { Product } from "./Product";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <>
        <UserCard
            name="robert de nulo"
            amount={2000}
            married={true}
            points={[99, 22]}
            address={{ street: "calle 51", city: "cdmx" }}
        />
    </>
);
