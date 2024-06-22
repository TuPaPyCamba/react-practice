export const Posts = () => {
    return (
        <button
            onClick={() => {
                fetch('https://jsonplaceholder.typicode.com/posts')
                .then(response => response.json())
                .then(data => console.log(data))
            }}
        >
            traer datos
        </button>
    );
};
