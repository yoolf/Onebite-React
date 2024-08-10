const Button = ({text, color, children}) => {
    console.log(text, color);
    return (
        <button style={ {color: color} }>
            {text} - {color.toUpperCase()}
            {children}
        </button>
    );
};

Button.defaultProps = {
    color: "black",
};

export default Button;