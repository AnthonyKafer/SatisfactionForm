import "./Progress.css"
import { AiOutlineUser, AiOutlineStar} from "react-icons/ai"
import { FiSend} from "react-icons/fi"

export function Progress (){
    return(
        <div className="StepsContainer">
            <div className="Step completed">
                <AiOutlineUser/>
                <p>Usuário</p>
            </div>

            <div className="Step active">
                <AiOutlineStar/>
                <p>Avaliação</p>
            </div>

            <div className="Step">
                <FiSend/>
                <p>Enviar</p>
            </div>
        </div>
    )
}