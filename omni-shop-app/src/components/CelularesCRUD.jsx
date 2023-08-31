import React, {useEffect, useState} from "react";
import Tabla from "./Tabla";
import axios from "axios";


function CelularesCRUD(){

    const[celulares, setCelulares] = useState()

    useEffect(() => {
        cargarCelulares()
    }, [])

    async function cargarCelulares(){
        try{
            let res = await axios("https://denny2023.azurewebsites.net/api/celulares")
            let data = await res.data

            setCelulares(data)
        }
        catch(error){
            alert(error)
            console.log(error)
        }
    }

    return(
        <div>
            {celulares=== undefined ?
                <div><h2>Cargando</h2>
                    <div className="spinner-border" role="status">
                        <span className="visible-hidden">Loading...</span>
                    </div>
                </div>                
            :
                <Tabla controlador={"celulares"} lista={celulares} cols={["ID", "Marca", "Modelo", "Color", "Precio", "Descripcion", "Operadora"]} />
            }
        </div>
    )
}


export default CelularesCRUD