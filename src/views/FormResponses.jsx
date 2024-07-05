import "./FormResponses.css"

export function FormResponses ({data}){
    return(
        <>
            <h1>Lista de usuários cadastrados:</h1>
            <div className="EvaluationResume">
            <div className="Encapsula">
                <div className="Field">
                    <p className="ImportantParagraph">Nome:</p>
                </div>
                <div className="Response">
                    <p>paulin</p>
                </div>
            </div>

            <div className="Encapsula">
                <div className="Field">
                    <p className="ImportantParagraph">Email:</p>
                </div>
                <div className="Response">
                    <p>Email</p>
                </div>
            </div>

            <div className="Encapsula">
                <div className="Field">
                    <p className="ImportantParagraph">Nota:</p>
                </div>
                <div className="Response">
                    <p>Nota</p>
                </div>
            </div>

            <div className="Encapsula">
                <div className="Field">
                    <p className="ImportantParagraph">Comentário:</p>
                </div>
                <div className="Response" >
                    <p>Comentário</p>
                </div>
            </div>     
            </div>
        </>
    )
}