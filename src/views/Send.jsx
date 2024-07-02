import "./Send.css"


export function Send (){
    return(
        <>
            <h1>Fodase</h1>
            <p>Sua opinião é muito importante para nós!</p>
            <p className="subParagraph">Para concluir sua avalição confira as informações e clique em Enviar:</p>
            <h3>Aqui está seu resumo:</h3>
            <div className="EvaluationResume">
                <p className="ImportantParagraph">Seu nome:</p>
                <p className="ImportantParagraph">Sua nota:</p>
                <p className="ImportantParagraph">Seu comentário:</p>
            </div>
        </>
    )
}