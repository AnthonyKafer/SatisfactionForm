import "./Evaluation.css"
import { LargeTextInput } from '../components/LargeTextInput.jsx'
import { EvaluationBar } from "../components/EvaluationBar.jsx"

export function Evaluation (){
    return(
        <>
        <h1>Avalie-nos!</h1>
        <p>{"UserName"} abaixo coloque sua nota e seu comentário:</p>
        
        <EvaluationBar name="Selecione a nota:"/>
        <LargeTextInput name="Comentário:" placeHolder="Insira seu elogio, sugestão ou crítica aqui!"/>
        </>
    )
}