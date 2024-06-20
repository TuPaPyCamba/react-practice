export function Greeting({ title, name = "user" }) {
    return (
    <h1>
        {title} {name}
    </h1>
);
}

export function UserCard(props) {
    console.log(props)
    return <h1>xd</h1>;
}
