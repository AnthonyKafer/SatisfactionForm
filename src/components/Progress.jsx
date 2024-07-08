import "./Progress.css"
import { AiOutlineUser, AiOutlineStar} from "react-icons/ai"
import { FiSend} from "react-icons/fi"

export function Progress ({classname}){

   

    return(
        <div className={`StepsContainer ${classname}`}>
            <div className="Step" >
                <AiOutlineUser/>
                <p>Usuário</p>
            </div>

            <div className="Step">
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