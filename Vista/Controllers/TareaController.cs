using Controlador;
using Datos;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Vista.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TareaController : ControllerBase
    {

        [HttpGet]       
        [Route("Lista")]
        public async Task<IActionResult> Lista()
        {
            List<Tarea> lista_objTarea = Controlador_Tarea.Obtener_Tareas();
            return StatusCode(StatusCodes.Status200OK,lista_objTarea);
        }

        [HttpPost]
        [Route("Guardar")]
        public async Task<IActionResult> Guardar([FromBody] Tarea objTarea)
        {
            string respuesta = Controlador_Tarea.Crear_Tarea(objTarea);
            if (respuesta == "1")
            {
                return StatusCode(StatusCodes.Status200OK, "ok");
            }
            else
            {
                return StatusCode(StatusCodes.Status500InternalServerError, "No ok");
            }
        }

        [HttpDelete]
        [Route("Eliminar/{id:int}")]
        public async Task<IActionResult> Eliminar(int id)
        {
            Tarea objTarea = new();
            objTarea.Id = id;

            string respuesta = Controlador_Tarea.Eliminar_Tarea(objTarea);
            if (respuesta=="1")
            {
                return StatusCode(StatusCodes.Status200OK, "ok");
            }
            else
            {
                return StatusCode(StatusCodes.Status500InternalServerError, "No ok");
            }
        }
    }
}
