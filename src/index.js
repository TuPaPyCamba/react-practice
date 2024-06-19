import React from "react"
import ReactDOM from 'react-dom/client'

const root = ReactDOM.createRoot(document.getElementById('root'))

function Greeting() {
    const married = true

    if (married) {
        return <div>
            <h1> esta casado</h1>
        </div>
    } else {
        return <div>
            <h1>esta soltero</h1>
        </div>
    }
}

root.render(<div>
    <Greeting />
</div>)