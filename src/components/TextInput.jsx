import "./TextInput.css"

export function TextInput ({name, placheHolder}){
    return(
        <label htmlFor="TextInput">{name}
        <input type="text" name="TextInput" 
        placeholder={placheHolder}/>
        </label>
    )
}