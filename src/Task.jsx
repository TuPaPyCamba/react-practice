import "./task.css";

export function TaskCard({value}) {
    const TaskCardStyles = {
        background: "#000000",
        color: "#fff",
        padding: "20px",
    };

    return (
        <div style={TaskCardStyles}>
            <h1 style={{ fontWeight: "lighter" }}>Mi primer tarea</h1>
            <p className={value ? 'bggreen' : 'bgred'}>{value ? "tarea realizada" : "tarea no realizada"}</p>
        </div>
    );
}

export function TaskCard2({value}) {
    return (
        <div className="card">
            <h1>Mi primer tarea</h1>
            <p style={value ? {backgroundColor: 'green'} : {backgroundColor:'red'}}>{value ? "tarea realizada" : "tarea no realizada"}</p>
        </div>
    );
}
