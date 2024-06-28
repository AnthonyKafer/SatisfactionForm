import "./DefaultBtn.css"

export function DefaultBtn ({btnType, text}){
    return(
        <button type={btnType}>{text}</button>
    )
} 