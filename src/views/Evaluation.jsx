import "./Evaluation.css"
import { LargeTextInput } from '../components/LargeTextInput.jsx'
import { EvaluationBar } from "../components/EvaluationBar.jsx"

export function Evaluation ({data, updateInputs}){
    return(
        <>
        <h1>Avalie-nos!</h1>
        <p>{data.name}, abaixo coloque sua nota e seu comentário:</p>
        
        <EvaluationBar name="Selecione a nota:" note={data.note || 10} onChange={ data.note? (e)=> updateInputs("note", e.target.value) : data.note = 10 }/>

        <LargeTextInput name="Comentário:" placeHolder="Insira seu elogio, sugestão ou crítica aqui!" value={data.comentary || ""}
        onChange={(e)=> updateInputs("comentary", e.target.value)}
        />
        </>
    )
}