import "./DefaultBtn.css"


export function DefaultBtn ({btnType, text, icon, ...props}){

    return(
        <button type={btnType} {...props} >{text} {icon}</button>
    )
} 