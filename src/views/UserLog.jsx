import "./UserLog.css"
import { TextInput } from '../components/TextInput.jsx'

export function UserLog (){



    return(
        <>
            <h1>Bem Vindo!</h1>
            <p>Estamos muito felizes com sua compra, por favor, avalie-nos! Para isso insira os dados solicitados:</p>
        
        <TextInput name="Nome:" placheHolder="Nome Sobrenome"/>
        <TextInput name="Email:" placheHolder="Nome@gmail.com"/>
        
        </>
    )
}