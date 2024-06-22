import PropTypes from "prop-types";

export function Button({ text, name, number = "20" }) {
    console.log(text);
    return (
        <button
            onClick={function () {
                console.log("hola putos");
            }}
        >
            {text} - {name} - {number}
        </button>
    );
}

Button.propTypes = {
    text: PropTypes.string.isRequired,
};
