import "./UserLog.css"
import { TextInput } from '../components/TextInput.jsx'

export function UserLog (){
    return(
        <form>
        <TextInput name="Nome:" placheHolder="Nome Sobrenome"/>
        <TextInput name="Email:" placheHolder="Nome@gmail.com"/>
        </form>
    )
}