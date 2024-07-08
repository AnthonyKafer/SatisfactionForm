import "./TextInput.css"

export function TextInput ({name, placheHolder, value, onChange, require}){
    return(
        <label htmlFor="TextInput">{name}
        <input type="text" name="TextInput" required={require}
        placeholder={placheHolder} value={value} onChange={onChange}/>
        </label>
    )
}
