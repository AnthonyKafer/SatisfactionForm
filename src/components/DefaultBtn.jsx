import "./DefaultBtn.css"


export function DefaultBtn ({btnType, text, icon}){

    return(
        <button type={btnType}>{text} {icon}</button>
    )
} 