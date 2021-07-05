import './CalculatorScreen.css'

function CalculatorScreen(props) {
    return (
        <input value={props.displayVal} disabled/>
    )
}

export default CalculatorScreen