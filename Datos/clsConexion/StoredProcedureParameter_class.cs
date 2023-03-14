using System;
using System.Data;

namespace Datos.clsConexion
{
    class StoredProcedureParameter_class
    {
        // Nombre de la variable, debe ser igual a la declarada en el procedimiento almacenado
        public string Variable{ get; set; }

        // Valor de la variable, puede ser de cualquier tipo de dato. preferible que 
        // coincida con las variables declaradas en GetTypeProperty
        public Object Valor { get; set; }

        // Se definen los posibles tipos de datos que se le van a enviar al procedimiento almacenado
        // Esta lista podria aumentar conforme se usen otro tipo de variable.
        public SqlDbType GetTypeProperty
        {
            get
            {
                if (Valor.GetType().FullName == "System.String")
                    return SqlDbType.VarChar;
                else if (Valor.GetType().FullName == "System.Int16")
                    return SqlDbType.Int;
                else if (Valor.GetType().FullName == "System.Int32")
                    return SqlDbType.Int;
                else if (Valor.GetType().FullName == "System.Int64")
                    return SqlDbType.Int;
                else if (Valor.GetType().FullName == "System.Decimal")
                    return SqlDbType.Decimal;
                else if (Valor.GetType().FullName == "System.Double")
                    return SqlDbType.BigInt;
                else if (Valor.GetType().FullName == "System.DateTime")
                    return SqlDbType.DateTime;
                else if (Valor.GetType().FullName == "System.Byte")
                    return SqlDbType.Image;
                else if (Valor.GetType().FullName == "System.Byte[]")
                    return SqlDbType.VarBinary;
                else
                    return SqlDbType.VarBinary;
            }
        }

        // Procedimiento de creacion de la variable.
        public StoredProcedureParameter_class(string pVariable, object pValor)
        {
            try
            {
                Variable = pVariable;
                Valor = pValor;
            }
            catch (Exception ex)
            {
                throw new Exception("Error en la creación del Parámetro" + Environment.NewLine + ex.Message);
            }
        }
    }
}
