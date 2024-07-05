import "./TextInput.css"

export function TextInput ({name, placheHolder, value, onChange}){
    return(
        <label htmlFor="TextInput">{name}
        <input type="text" name="TextInput" 
        placeholder={placheHolder} value={value} onChange={onChange}/>
        </label>
    )
}
