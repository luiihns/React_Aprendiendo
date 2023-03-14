USE [DB_React_Aprendiendo]
GO
--*****************************************Borrado de Tablas*****************************************
DELETE FROM tarea
--*****************************************Borrado de Tablas*****************************************

--***************************************Reseteo autoincrement***************************************
DBCC CHECKIDENT (tarea, RESEED, 0)
--***************************************Reseteo autoincrement***************************************

--*********************************************Variables*********************************************
DECLARE @hoy AS DATETIME
--SET @hoy = GETDATE()
SET @hoy = '2023-01-01 12:00:00.001'
--*********************************************Variables*********************************************

--***************************************Inserciones de glosas***************************************
--***************************************Inserciones de glosas***************************************

--**************************************Inserciones Eva**********************************************
--**************************************Inserciones Eva**********************************************

--**************************************Inserciones Super Usuario************************************
--**************************************Inserciones Super Usuario************************************

--**************************************Inserciones De Usuarios****************************************
--**************************************Inserciones De Usuarios****************************************

--****************************************Otras inserciones******************************************
--****************************************Otras inserciones******************************************
SET IDENTITY_INSERT tarea ON 
INSERT tarea(t_id, t_descripcion, t_fechaCreacion) VALUES (1, 'Aprender ReactJS',@hoy)
INSERT tarea(t_id, t_descripcion, t_fechaCreacion) VALUES (2, 'Aprender .NET', @hoy)
INSERT tarea(t_id, t_descripcion, t_fechaCreacion) VALUES (3, 'Aprender JavaScript', @hoy)
GO
SET IDENTITY_INSERT tarea OFF
GO
