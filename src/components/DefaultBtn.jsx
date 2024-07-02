import "./DefaultBtn.css"

export function DefaultBtn ({btnType, text, event}){
    return(
        <button type={btnType} onClick={event}>{text}</button>
    )
} 