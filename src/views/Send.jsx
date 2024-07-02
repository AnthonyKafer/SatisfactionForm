import "./Send.css"


export function Send (){
    return(
        <>
            <h1>Fodase</h1>
            <p>Sua opinião é muito importante para nós!</p>
            <p className="subParagraph">Para concluir sua avalição confira as informações e clique em Enviar:</p>
            <h3>Aqui está seu resumo:</h3>
            <div className="EvaluationResume">
            <div className="Encapsula">
                <div className="Field">
                    <p className="ImportantParagraph">Nome:</p>
                </div>
                <div className="Response">
                    <p>fodase</p>
                </div>
            </div>

            <div className="Encapsula">
                <div className="Field">
                    <p className="ImportantParagraph">Email:</p>
                </div>
                <div className="Response">
                    <p>fodase</p>
                </div>
            </div>

            <div className="Encapsula">
                <div className="Field">
                    <p className="ImportantParagraph">Nota:</p>
                </div>
                <div className="Response">
                    <p>fodase</p>
                </div>
            </div>

            <div className="Encapsula">
                <div className="Field">
                    <p className="ImportantParagraph">Comentário:</p>
                </div>
                <div className="Response" >
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero, nisi nam vitae aliquam id inventore aperiam quas animi est qui ab maiores perferendis odio laboriosam nulla eum sit veritatis voluptas.</p>
                </div>
            </div>     
            </div>
        </>
    )
}