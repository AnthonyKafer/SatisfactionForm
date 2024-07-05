import "./DefaultBtn.css"


export function DefaultBtn ({btnType, text, icon, disabled, ...props}){

    return(
        <button type={btnType} disabled={disabled} {...props}>{text} {icon}</button>
    )
} 