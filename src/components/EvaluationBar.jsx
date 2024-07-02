import "./EvaluationBar.css"

export function EvaluationBar ({name}){
    return(
        <>
        <label htmlFor="EvaluationBar">{name}
        <input type="range" name="EvaluationBar" id="rangeInput" min="0" max="10" step="1"/>
        </label>
        </>
    )
}