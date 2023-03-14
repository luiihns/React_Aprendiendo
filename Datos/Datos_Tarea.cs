using Datos.clsConexion;
using System;
using System.Data;

namespace Datos
{
    public class Datos_Tarea
    {
        public static DataSet Obtener_Tareas()
        {
            StoredProcedure_class sp = new("Proceso_Tareas_Obtener");
            return sp.EjecutarProcedimiento();
        }

        public static DataSet Crear_Tarea(Tarea objTarea)
        {
            StoredProcedure_class sp = new("Proceso_Tarea_Crear");
            sp.AgregarParametro("prmDescripcion", objTarea.Descripcion);
            return sp.EjecutarProcedimiento();
        }

        public static DataSet Eliminar_Tarea(Tarea objTarea)
        {
            StoredProcedure_class sp = new("Proceso_Tarea_Eliminar");
            sp.AgregarParametro("prmId", objTarea.Id);
            return sp.EjecutarProcedimiento();
        }
    }
}
