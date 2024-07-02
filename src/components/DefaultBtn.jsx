import "./DefaultBtn.css"


export function DefaultBtn ({btnType, text, className, icon}){

    return(
        <button type={btnType} className={className}>{text} {icon}</button>
    )
} 