import React from "react";
import ReactDOM from "react-dom/client";
import { Greeting, UserCard } from "./Greeting";
import { Product } from "./Product";
import { Button } from "./Button";
import { TaskCard, TaskCard2 } from "./Task";
import { Saludar } from "./Saludar";
import { Posts } from "./Posts";

const root = ReactDOM.createRoot(document.getElementById("root"));

const handleChange = (e) => {
    console.log(e.target.value + "...");
};

const user = [
    {
        id: 1,
        name: "fernando",
        Image: "https://robohash.org/user1"
    },
    {
        id: 2,
        name: "roberto",
        Image: "https://robohash.org/user2"
    },
    {
        id: 3,
        name: "Lazo",
        Image: "https://robohash.org/user3"
    }
];
// pasar valores a un component
root.render(
    <>
        <Posts />
        {/* <TaskCard value={true} />
        <TaskCard2 value={false} /> */}
        {/* <Saludar /> */}

        {/* <Button text='enviar'/> */}

        {/* <UserCard
            name="robert de nulo"
            amount={2000}
            married={true}
            points={[99, 22]}
            address={{ street: "calle 51", city: "cdmx" }}
            greet={function(){alert('hola')}}
        />
        <UserCard
            name="iroan man"
            amount={1000000}
            married={false}
            points={[90, 22, 16]}
            address={{ street: "wall street", city: "new york" }}
            greet={function(){alert('cuchaw')}}
        /> */}
    </>
);
