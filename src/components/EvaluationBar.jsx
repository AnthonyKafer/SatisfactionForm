import { useState } from "react"
import "./EvaluationBar.css"

export function EvaluationBar ({name, note, onChange}){

    const [value, setValue] = useState()

    return(
        <>
        <label htmlFor="EvaluationBar">{name} <span className={note<6? "low": "high"}>{note? note: 10}</span>
        <input type="range" name="EvaluationBar" id="rangeInput" min="0" max="10" step="1" value={note} onChange={onChange}/>
        </label>
        </>
    )
}