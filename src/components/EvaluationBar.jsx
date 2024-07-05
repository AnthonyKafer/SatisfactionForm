import { useState } from "react"
import "./EvaluationBar.css"

export function EvaluationBar ({name}){

    const [value, setValue] = useState()

    return(
        <>
        <label htmlFor="EvaluationBar">{name} <span className={value<6? "low": "high"}>{value? value: 10}</span>
        <input type="range" name="EvaluationBar" id="rangeInput" min="0" max="10" step="1" onChange={ev =>{
            setValue(ev.target.value)
        }} />
        </label>
        </>
    )
}