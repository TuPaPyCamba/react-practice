import React from "react"
import ReactDOM from "react-dom/client"
import { Greeting, UserCard } from './Greeting'
import { Product } from './Product'

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<>
    <Greeting title="hola" />
    <Greeting title="que rollo" />
    <Greeting title="sobres" />
    <Greeting title="cuchaw" />
</>);
