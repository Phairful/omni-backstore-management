import React, {useEffect, useState} from "react";
import Tabla from "./Tabla";
import axios from "axios";


function JuegosCRUD(){

    const[juegos, setJuegos] = useState()

    useEffect(() => {
        cargarJuegos()
    }, [])

    async function cargarJuegos(){
        try{
            let res = await axios("https://denny2023.azurewebsites.net/api/juegos")
            let data = await res.data

            setJuegos(data)
        }
        catch(error){
            alert(error)
            console.log(error)
        }
    }

    return(
        <div>
            {juegos=== undefined ?
                <div><h2>Cargando</h2>
                    <div className="spinner-border" role="status">
                        <span className="visible-hidden">Loading...</span>
                    </div>
                </div>                
            :
                <Tabla controlador={"juegos"} lista={juegos} cols={["ID", "Titulo", "Descripcion", "Plataforma", "Precio", "Categoria"]} />
            }
        </div>
    )
}


export default JuegosCRUD