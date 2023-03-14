import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, useState, Fragment } from "react";
import Tarea_Agregar from './components/Tarea/Tarea_Agregar';
import Tareas_Listado from './components/Tarea/Tareas_Listado';

const App = () => {

    const [tareas, setTareas] = useState([]);

    const mostrarTareas = async () => {
        const response = await fetch("api/tarea/Lista");
        if (response.ok) {
            const data = await response.json();
            setTareas(data);
        } else {
            console.log("Status code: " + response.status);
        }
    };

    useEffect(() => {
        mostrarTareas();
    }, []);

    return (
        <Fragment>
            <div className="container bg-dark p-4">
                <Tarea_Agregar
                    key="tarea_agregar_app"
                    onTareaAgregada={mostrarTareas}>
                </Tarea_Agregar>

                <div className="row mt-4">
                    <div className="col-sm-12">
                        <div className="list-group">
                            <Tareas_Listado key="usuarios_listado_app"
                                items={tareas}
                                onTareaEliminada={mostrarTareas}>
                            </Tareas_Listado>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default App;