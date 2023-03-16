using System.Data.SqlClient;

namespace Datos.clsConexion
{
    class Conexion_class
    {
        public SqlConnection SqlConn { get; set; }

        public Conexion_class()
        {
            //string mSqlIP = "localhost" + "\"";
            //string mSqlServer = "LUIIMSSQLSERVER";
            string mSqlServer = "lhns-db-react-aprendiendo.cumcdwizmtzf.sa-east-1.rds.amazonaws.com";
            string mSqlDB = "DB_React_Aprendiendo";

            string mSqlUser = "User_React_Aprendiendo";
            string mSqlPassword = "Calculo01x22023React";

            string StringConexion = "Max pool Size=1000;" + 
                "Data Source=" + mSqlServer + "; " +
                "Initial Catalog=" + mSqlDB + "; " +
                "Persist Security Info=True; " +
                "User ID=" + mSqlUser + ";" +
                "Password=" + mSqlPassword + ";" +
                "pooling=true;";

            SqlConn = new SqlConnection
            {
                ConnectionString = StringConexion
            };
        }

        public SqlConnection AbrirConexion()
        {
            this.SqlConn.Open();
            return this.SqlConn;
        }

        public void CerrarConexion()
        {
            this.SqlConn.Close();
        }
    }
}
