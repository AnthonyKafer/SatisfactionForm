import "./DefaultBtn.css"


export function DefaultBtn ({btnType, text, icon, disabled, onClick}){

    return(
        <button type={btnType} disabled={disabled} onClick={onClick} >{text} {icon}</button>
    )
} 