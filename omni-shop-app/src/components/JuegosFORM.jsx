import React, {useState, useEffect} from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from 'axios'
import borrar from '../icons/PNG_Blanco/Eliminar.png';

function JuegosFORM({del}){

    const[titulo, setTitulo] = useState('')
    const[descripcion, setDescripcion] = useState('')
    const[plataforma, setPlataforma] = useState('')
    const[precio, setPrecio] = useState('')
    const[categoria, setCategoria] = useState('')
    

    const Navigate = useNavigate()
    const {id} = useParams()

    useEffect(() =>{
        if(id != undefined){
            //cargar datos
            cargarJuegos()
        }
    }, [])

    async function cargarJuegos(){
        try{
            let res = await axios("https://denny2023.azurewebsites.net/api/juegos/"+id)
            let data = await res.data

            setTitulo(data.titulo)
            setDescripcion(data.descripcion)
            setPlataforma(data.plataforma)
            setPrecio(data.precio)
            setCategoria(data.categoria)
            
        }
        catch(error){
            alert(error)
            console.log(error)
        }
    }

    async function guardar(){
        try{
            let juegos = {
                titulo: titulo,
                descripcion: descripcion,
                plataforma: plataforma,
                precio: precio,
                categoria: categoria
            }
            
            let res = await axios.post("https://denny2023.azurewebsites.net/api/juegos", juegos)
            let data = await res.data

            if(data.status === 1){
                alert(data.message)
                Navigate("/juegos")
            }
        }
        catch(error){
            alert(error)
            console.log(error)
        }
    }

    async function editar(){
        try{
            let juegos = {
                juegoId: id,
                titulo: titulo,
                descripcion: descripcion,
                plataforma: plataforma,
                precio: precio,
                categoria: categoria
            }

            let res = await axios.put("https://denny2023.azurewebsites.net/api/juegos", juegos)
            let data = await res.data

            if(data.status === 1){
                alert(data.message)
                Navigate("/juegos")
            }
        }
        catch(error){
            //alert(error)
            console.log(error)
            if(error.response.status === 404 || error.response.status === 500){
                alert("El registro ya no existe")
                Navigate("/juegos")
            }
                
        }
    }

    async function eliminar(){
        try{
            let res = await axios.delete("https://denny2023.azurewebsites.net/api/juegos?id="+id)
            let data = await res.data

            if(data.status === 1){
                alert(data.message)
                Navigate("/juegos")
            }
        }
        catch(error){
            alert(error)
            console.log(error)
        }
    }

    function enviar(e){
        const form = document.querySelector("#formulario")
        e.preventDefault()
        e.stopPropagation()
        if (form.checkValidity()) {
            if(id === undefined)
                guardar()
            else if(del === undefined)
                editar()
            else
                eliminar()
        }

        form.classList.add('was-validated')
    }

    function cancelar(){
        Navigate("/juegos")
    }

    return(
        <div>
            return (
    <div className="celulares-form-container">
    <h2>Añadir un Juego a la tienda</h2>
      <form id="formulario" className="needs-validation" noValidate>
        {id !== undefined && (
          <div className="form-group">
            <label className="form-label">ID</label>
            <input className="form-control" value={id} readOnly disabled />
          </div>
        )}

        {[
          { label: "Titulo", value: titulo },
          { label: "Descripcion", value: descripcion },
          { label: "Plataforma", value: plataforma },
          { label: "Precio", value: precio },
          { label: "Categoria", value: categoria },
        ].map((field, index) => (
          <div className="form-group" key={index}>
            <label className="form-label">{field.label}</label>
            <input
              className="form-control"
              value={field.value}
              type="text"
              required
              onChange={(e) => {
                if (del === undefined) {
                  switch (field.label) {
                    case "Titulo":
                      setTitulo(e.target.value);
                      break;
                    case "Descripcion":
                      setDescripcion(e.target.value);
                      break;
                    case "Plataforma":
                      setPlataforma(e.target.value);
                      break;
                    case "Precio":
                      setPrecio(e.target.value);
                      break;
                    case "Categoria":
                      setCategoria(e.target.value);
                      break;
                    default:
                      break;
                  }
                }
              }}
              disabled={del !== undefined}
            />
            <div className="valid-feedback">OK</div>
            <div className="invalid-feedback">Campo requerido</div>
          </div>
        ))}

        <hr />
        <div className="button-container">
          <button
            className={`btn btn-${id === undefined ? "success" : del === undefined ? "primary" : "danger"}`}
            onClick={(e) => enviar(e)}
          >
            {id === undefined ? "Guardar" : del === undefined ? "Editar" : "Eliminar"}
          </button>
          <button className="btn btn-danger" onClick={cancelar}>
          <img style={{ maxHeight: '20px', border: 'none', padding:'none' }} 
                                                src={borrar} 
                                                alt="eliminar" />Cancelar
          </button>
        </div>
      </form>
    </div>
  );
        </div>
    )
}

export default JuegosFORM