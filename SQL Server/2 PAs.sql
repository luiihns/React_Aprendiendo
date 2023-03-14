USE [DB_React_Aprendiendo]
GO

DROP PROCEDURE [dbo].[Proceso_Tareas_Obtener]
GO
DROP PROCEDURE [dbo].[Proceso_Tarea_Eliminar]
GO
DROP PROCEDURE [dbo].[Proceso_Tarea_Crear]
GO

SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
-- =============================================
-- Author:		<Author,,Name>
-- Create date: <Create Date,,>
-- Description:	<Description,,>
-- =============================================
CREATE PROCEDURE [dbo].[Proceso_Tarea_Crear] 
	@prmDescripcion NVARCHAR(100)	
AS
BEGIN
	SET NOCOUNT ON;

	DECLARE @hoy DATETIME
	SET @hoy = GETDATE()

	INSERT INTO tarea(	t_descripcion,
						t_fechaCreacion)
	VALUES (@prmDescripcion,
			@hoy)

	SELECT 1 as respuesta
END
GO

SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
-- =============================================
-- Author:		<Author,,Name>
-- Create date: <Create Date,,>
-- Description:	<Description,,>
-- =============================================
CREATE PROCEDURE [dbo].[Proceso_Tarea_Eliminar]
	@prmId int
AS
BEGIN
	SET NOCOUNT ON;

    DELETE FROM tarea WHERE t_id = @prmId

	SELECT 1 as respuesta
END
GO

SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
-- =============================================
-- Author:		<Author,,Name>
-- Create date: <Create Date,,>
-- Description:	<Description,,>
-- =============================================
CREATE PROCEDURE [dbo].[Proceso_Tareas_Obtener]
AS
BEGIN
	SET NOCOUNT ON;

    SELECT	t_id as idTarea,
			t_descripcion as descripcionTarea,
			t_fechaCreacion as fechaCreacionTarea
	FROM	tarea;
END
GO
