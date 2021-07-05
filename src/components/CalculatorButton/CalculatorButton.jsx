import "./CalculatorButton.css";

function CalculatorButton(props) {
    
    function onClickHandler() {
        props.onCalcPress(props.value)
    }
    
    return (
        <button onClick={onClickHandler}>{props.value}</button>
    )
}

export default CalculatorButton