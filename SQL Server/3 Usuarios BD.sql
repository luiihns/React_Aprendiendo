USE [DB_React_Aprendiendo]
GO

CREATE USER [User_React_Aprendiendo] FOR LOGIN [User_React_Aprendiendo] WITH DEFAULT_SCHEMA=[dbo]
GO

GRANT EXECUTE ON [dbo].[Proceso_Tarea_Crear] TO [User_React_Aprendiendo] AS [dbo];
GRANT EXECUTE ON [dbo].[Proceso_Tarea_Eliminar] TO [User_React_Aprendiendo] AS [dbo];
GRANT EXECUTE ON [dbo].[Proceso_Tareas_Obtener] TO [User_React_Aprendiendo] AS [dbo];