using System;
using System.Collections.Generic;
using System.Data;
using Datos;

namespace Controlador
{
    public class Controlador_Tarea
    {
        public static List<Tarea> Obtener_Tareas()
        {
            DataSet ds = Datos_Tarea.Obtener_Tareas();

            List<Tarea> lista_objTarea = new();
            Tarea objTarea_tmp;
            foreach (DataRow row in ds.Tables[0].Rows)
            {
                objTarea_tmp = new Tarea
                {
                    Id = Convert.ToInt32(row["idTarea"]),
                    Descripcion = Convert.ToString(row["descripcionTarea"]),
                    FechaCreacion = Convert.ToDateTime(row["fechaCreacionTarea"])
                };
                lista_objTarea.Add(objTarea_tmp);
            }

            return lista_objTarea;            
        }

        public static string Crear_Tarea(Tarea objTarea)
        {
            DataSet ds = Datos_Tarea.Crear_Tarea(objTarea);

            string respuesta = "0";
            foreach (DataRow row in ds.Tables[0].Rows)
            {
                respuesta = Convert.ToString(row["respuesta"]);
                break;
            }

            return respuesta;
        }

        public static string Eliminar_Tarea(Tarea objTarea)
        {
            DataSet ds = Datos_Tarea.Eliminar_Tarea(objTarea);

            string respuesta = "0";
            foreach (DataRow row in ds.Tables[0].Rows)
            {
                respuesta = Convert.ToString(row["respuesta"]);
                break;
            }

            return respuesta;
        }
    }
}
