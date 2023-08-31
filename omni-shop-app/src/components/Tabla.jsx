import React, {useEffect} from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import { Link } from "react-router-dom";
import borrar from '../icons/PNG_Blanco/Eliminar.png';
import actualizar from '../icons/PNG_Blanco/agregar.png';
import nuevo from '../icons/PNG_Blanco/Crear.png'
import "../App.css";
import Header from "./Header";

function Tabla({lista, cols, controlador}){

    /*
    useEffect(() => {
        //console.log(lista)
        //console.log(cols)
        lista.map((value, index) => {
            console.log(value)
            console.log(Object.values(value))
        })
    }, [])*/

    return(
        <div>
             <Routes>
                    <Route path="/" element={<Header />} /></Routes>

            <table className="table table-light table-hover table-bordered container-md rounded-table-container">
                <thead>
                    <tr>
                        <th>
                            <button className="">
                                <Link to={`/${controlador}/new`}  >
                                    Nuevo
                                </Link>
                            </button>
                        </th>
                        {
                            cols.map((value, index) =>{
                                return <th key={index}>{value}</th>
                            })
                        }
                    </tr>
                </thead>
                <tbody>
                    {
                        lista.map((value, index) => {
                            return <tr key={index}>
                                <td>
                                <Link to={`/${controlador}/edit/${Object.values(value)[0]}`} className="btn btn-primary">
                                        <img style={{ maxHeight: '20px' , border: 'none' , padding:'none'}} 
                                                src={actualizar} 
                                                alt="editar" /></Link>
                                    <Link to={`/${controlador}/delete/${Object.values(value)[0]}`} 
                                            className="btn btn-danger">
                                        <img style={{ maxHeight: '20px', border: 'none', padding:'none' }} 
                                                src={borrar} 
                                                alt="eliminar" /></Link>
                                </td>
                                {
                                    Object.values(value).map((value2, index2)=>{
                                        return <td key={index2}>{value2}</td>
                                    })
                                }
                            </tr>
                        })
                    }
                </tbody>
                <tfoot>
                
                </tfoot>
            </table>
        </div>
    )
}

export default Tabla