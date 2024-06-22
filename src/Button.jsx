import PropTypes from "prop-types";

export function Button({ text, name, number = "20" }) {
    console.log(text);
    return (
        <button>
            {text} - {name} - {number}
        </button>
    );
}

Button.propTypes = {
    text: PropTypes.string.isRequired,
};
