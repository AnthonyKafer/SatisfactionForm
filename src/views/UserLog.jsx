import "./UserLog.css"
import { TextInput } from '../components/TextInput.jsx'

export function UserLog ({data, updateInputs}){



    return(
        <>
            <h1>Bem Vindo!</h1>
            <p>Estamos muito felizes com sua compra, por favor avalie-nos! Para isso insira os dados solicitados:</p>
        
        <TextInput require={true} name="Nome:" placheHolder="Nome Sobrenome" value={data.name || ""} onChange={(e)=> updateInputs("name", e.target.value)}/>
        <TextInput name="Email:" placheHolder="Nome@gmail.com" value={data.emai || ""}  onChange={(e)=> updateInputs("emai", e.target.value)}/>
        </>
    )
}