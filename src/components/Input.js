import './Input.css';

const Input = ({ text, result, fontSize }) => {
    return (
        <div className="Input-wrap">
            <div className="Result" style={{ fontSize: fontSize }}>
                <h1>{result}</h1>
            </div>
            <div className="Text">
                <h3>{text}</h3>
            </div>
        </div>
    );
}

export default Input;