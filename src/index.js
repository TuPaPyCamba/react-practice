import React from "react";
import ReactDOM from "react-dom/client";
import { Greeting, UserCard } from "./Greeting";
import { Product } from "./Product";
import { Button } from "./Button";

const root = ReactDOM.createRoot(document.getElementById("root"));

// pasar valores a un component
root.render(
    <>
        <Button text='enviar' />
        <Button text='hola' />
        <Button text='' name='ray' number=""/>
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
