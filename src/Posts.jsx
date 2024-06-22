import { GiPauseButton } from 'react-icons/gi'

export const Posts = () => {
    return (
        <button
            onClick={() => {
                fetch('https://jsonplaceholder.typicode.com/posts')
                    .then(response => response.json())
                    .then(data => console.log(data))
                    .catch(error => console.error(error))
            }}
        >
            <GiPauseButton />
            traer datos
        </button>
    );
};
