import "./FormResponses.css"
import { useEffect, useState } from "react"

export function FormResponses (){

    const url = "http://localhost:3000/reviews"
    const [users, setUser] = useState([])

    useEffect(()=>{
        async function getData(){
            const response = await fetch(url)
            const dataResponse = await response.json()

            setUser(dataResponse)
        }
        getData()
    }, [])

    return(
        <>
        <h1>Lista de respostas:</h1> 
        
        {users.map((user)=>(
            <div className="Container" >

            <div className="Name">
                <h2>Nome:</h2>
                <h2>{user.data.name}</h2>   
            </div>   
            <div className="Field">
                <p className="ImportantParagraph">Email:</p>
                <p>{user.data.emai}</p>   
            </div>
            <div className="Field">
                <p className="ImportantParagraph">Nota:</p>
                <p>{user.data.note}</p>   
            </div>
            <div className="Field">
                <p className="ImportantParagraph">Comentario:</p>
                <p>{user.data.comentary}</p>   
            </div>
        </div>
        ))}
        {console.log(users)}
        </>
    )
}