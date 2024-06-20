export function Greeting({ title, name = "user" }) {
    return (
        <h1>
            {title} {name}
        </h1>
    );
}

export function UserCard({name, amount, married, address}) {
    return <div>
        <h1>{name}</h1>
        <h1>${amount}</h1>
        <h1>{married ? 'married' : 'single'}</h1>
        <ul>
            <li>city: {address.city}</li>
            <li>addrees: {address.street}</li>
        </ul>
    </div>
}
