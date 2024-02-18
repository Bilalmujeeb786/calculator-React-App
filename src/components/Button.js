import './Button.css';

const Button = ({ symbol, color, handleClick }) => {
    // Inline style object that uses the color prop for the background color


    return (
        <div 
        style ={{
            backgroundColor: color // This uses the color prop
        }}
        onClick={handleClick}
         className="Button-wrap">
            {symbol}
        </div>
    );
}

export default Button;
