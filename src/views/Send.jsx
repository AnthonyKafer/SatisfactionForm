import { DefaultBtn } from "../components/DefaultBtn"
import "./Send.css"


export function Send ({data}){
    return(
        <>
            <h1>Quase lá...</h1>
            <p>Sua opinião é muito importante para nós!</p>
            <p className="subParagraph">Para concluir sua avalição confira as informações e clique em Enviar:</p>
            <h3>Aqui está seu resumo:</h3>
            <div className="EvaluationResume">
            <div className="Encapsula">
                <div className="Field">
                    <p className="ImportantParagraph">Nome:</p>
                </div>
                <div className="Response">
                    <p>{data.name}</p>
                </div>
            </div>

            <div className="Encapsula">
                <div className="Field">
                    <p className="ImportantParagraph">Email:</p>
                </div>
                <div className="Response">
                    <p>{data.emai || "Nulo"}</p>
                </div>
            </div>

            <div className="Encapsula">
                <div className="Field">
                    <p className="ImportantParagraph">Nota:</p>
                </div>
                <div className="Response">
                    <p>{data.note}</p>
                </div>
            </div>

            <div className="Encapsula">
                <div className="Field">
                    <p className="ImportantParagraph">Comentário:</p>
                </div>
                <div className="Response" >
                    <p>{data.comentary || "Nulo"}</p>
                </div>
            </div>     
            </div>
        </>
    )
}