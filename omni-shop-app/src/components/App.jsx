import React from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Header from "./Header";
import Menu from "./Menu";
import CelularesCRUD from "./CelularesCRUD";
import CelularesFORM from "./CelularesFORM";
import JuegosCRUD from "./JuegosCRUD";
import JuegosFORM from "./JuegosFORM";


function App(){
    return(
        <div>

            <BrowserRouter>
            <Menu /> 
            <hr />
            <Routes>
                    <Route path="/" element={<Header />} />
                    <Route path="/celulares" element={<CelularesCRUD />} />
                    <Route path="/celulares/new" element={<CelularesFORM />} />
                    <Route path="/celulares/edit/:id" element={<CelularesFORM />} />
                    <Route path="/celulares/delete/:id" element={<CelularesFORM del={true} />} />
                    <Route path="/juegos" element={<JuegosCRUD />} />
                    <Route path="/juegos/new" element={<JuegosFORM />} />
                    <Route path="/juegos/edit/:id" element={<JuegosFORM />} />
                    <Route path="/juegos/delete/:id" element={<JuegosFORM del={true} />} />
                    
            </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App