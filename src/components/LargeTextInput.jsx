import "./LargeTextInput.css"

export function LargeTextInput ({name, placeHolder}){
    return(
        <>
        <label htmlFor="LargTextInput">{name}</label>
        <textarea name="LargTextInput" id="" placeholder={placeHolder}></textarea>
        </>
    )
}