import "./LargeTextInput.css"

export function LargeTextInput ({name, placeHolder, value, onChange}){
    return(
        <>
        <label htmlFor="LargTextInput">{name}
        <textarea name="LargTextInput" placeholder={placeHolder} value={value} onChange={onChange}/>
        </label>
        </>
    )
}