import "./LargeTextInput.css"

export function LargeTextInput ({name, placeHolder}){
    return(
        <>
        <label htmlFor="LargTextInput">{name}
        <textarea name="LargTextInput" placeholder={placeHolder}/>
        </label>
        </>
    )
}