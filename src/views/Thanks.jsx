import { DefaultBtn } from "../components/DefaultBtn"
import { SendData } from "../hook/SendData"
import "./Thanks.css"

export function Thanks (data){

    return(
        <div className="thankContainer">
            <h1>Obrigado pela avaliação!</h1>
            <DefaultBtn text="Enviar" btnType="submit" id="fodase" onClick={(e) => SendData(data)}/>
        </div>
        
    )
}