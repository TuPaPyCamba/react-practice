import React, {useState} from "react";
import ReactDOM from "react-dom/client";
import { Greeting, UserCard } from "./Greeting";
import { Product } from "./Product";
import { Button } from "./Button";
import { TaskCard, TaskCard2 } from "./Task";
import { Saludar } from "./Saludar";
import { Posts } from "./Posts";
import { users } from "./arreglos";

const root = ReactDOM.createRoot(document.getElementById("root"));

const handleChange = (e) => {
    console.log(e.target.value + "...");
};

function Counter(){

    const [counter, setcounter] = useState(10)

    return (
        <div>
            
        </div>
        // <div>
        //     <h1>counter : {counter} </h1>
        //     <button onClick={()=>{
        //         setcounter(counter + 1)
        //     }}>
        //         sumar
        //     </button>
        //     <button onClick={()=>{
        //         setcounter(counter - 1)
        //     }}>
        //         restar
        //     </button>
        //     <button onClick={()=>{
        //         setcounter(10)
        //     }}>
        //         reiniciar
        //     </button>
        // </div>
    )
}

// pasar valores a un component
root.render(
    <>
        <Counter />

        {/* {users.map((user, i) => {
            return (
                <div key={i}>
                    <h1>{user.name}</h1>
                    <img src={user.Image} />
                </div>
            );
        })} */}

        {/* <Posts /> */}
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
