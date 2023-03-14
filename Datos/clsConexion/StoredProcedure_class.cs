using System.Data.SqlClient;
using System.Data;
using System.Collections.Generic;

namespace Datos.clsConexion
{
    class StoredProcedure_class
    {
        public string Nombre { get; set; }

        public List<StoredProcedureParameter_class> Parametros{ get; set; }

        // Solo recibe el nombre del procedimiento e inicializa la colección.
        public StoredProcedure_class(string nNombre)
        {
            Nombre = nNombre;
            Parametros = new List<StoredProcedureParameter_class>();
        }

        // Constructor Vacio.
        public StoredProcedure_class()
        {
        }

        // Agrega los parametros del procedimiento y su respectivo valor.
        public void AgregarParametro(string pVariable, object pValor)
        {
            StoredProcedureParameter_class iParametro = new("@" + pVariable, pValor);
            this.Parametros.Add(iParametro);
        }

        // Ejecuta el procedimiento almacenado.
        public DataSet EjecutarProcedimiento()
        {
            Conexion_class Conn = new();
            SqlCommand sqlCmd = new(this.Nombre, Conn.AbrirConexion());
            sqlCmd.CommandType = CommandType.StoredProcedure;
            sqlCmd.CommandTimeout = 4000;

            // Agrega las variables al procedimiento almacenado
            foreach (StoredProcedureParameter_class mParametro in this.Parametros)
            {
                SqlParameter pParam = new(mParametro.Variable, mParametro.Valor); // --  mParametro.GetTypeProperty)
                pParam.Direction = ParameterDirection.Input;
                pParam.Value = mParametro.Valor;
                sqlCmd.Parameters.Add(pParam);
            }

            // SqlAdapter utiliza el SqlCommand para llenar el Dataset

            SqlDataAdapter sda = new(sqlCmd);

            // Se llena el dataset
            DataSet ds = new();
            sda.Fill(ds);

            Conn.CerrarConexion();
            return ds;
        }
    }
}
