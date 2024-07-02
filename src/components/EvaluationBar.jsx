import "./EvaluationBar.css"

export function EvaluationBar ({name, ActualValue}){


    return(
        <>
        <label htmlFor="EvaluationBar">{name} <span>{ActualValue}</span>
        <input type="range" name="EvaluationBar" id="rangeInput" min="0" max="10" step="1" />
        </label>
        </>
    )
}