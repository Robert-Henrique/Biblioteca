-------------------------------------------------------------------------------------
--USE [Biblioteca]
--GO

--/****** Object:  Table [dbo].[Livro]    Script Date: 03/06/2016 21:08:01 ******/
--SET ANSI_NULLS ON
--GO

--SET QUOTED_IDENTIFIER ON
--GO

--SET ANSI_PADDING ON
--GO

--CREATE TABLE [dbo].[Livro](
--	[Id] [int] IDENTITY(1,1) NOT NULL,
--	[Titulo] [varchar](100) NOT NULL,
--	[AnoPublicacao] [int] NOT NULL,
--PRIMARY KEY CLUSTERED 
--(
--	[Id] ASC
--)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
--) ON [PRIMARY]

--GO

--SET ANSI_PADDING OFF
--
-------------------------------------------------------------------------------------
--USE [Biblioteca]
--GO

--/****** Object:  Table [dbo].[Estado]    Script Date: 03/06/2016 21:09:29 ******/
--SET ANSI_NULLS ON
--GO

--SET QUOTED_IDENTIFIER ON
--GO

--CREATE TABLE [dbo].[Estado](
--	[Id] [int] IDENTITY(1,1) NOT NULL,
--	[Nome] [nvarchar](max) NULL,
--	[UF] [nvarchar](max) NULL,
-- CONSTRAINT [PK_dbo.Estado] PRIMARY KEY CLUSTERED 
--(
--	[Id] ASC
--)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
--) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

--GO
-------------------------------------------------------------------------------------
--USE [Biblioteca]
--GO

--/****** Object:  Table [dbo].[Cidade]    Script Date: 03/06/2016 21:10:09 ******/
--SET ANSI_NULLS ON
--GO

--SET QUOTED_IDENTIFIER ON
--GO

--CREATE TABLE [dbo].[Cidade](
--	[Id] [int] IDENTITY(1,1) NOT NULL,
--	[Nome] [nvarchar](max) NULL,
--	[EstadoId] [int] NOT NULL,
-- CONSTRAINT [PK_dbo.Cidade] PRIMARY KEY CLUSTERED 
--(
--	[Id] ASC
--)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
--) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

--GO

--ALTER TABLE [dbo].[Cidade]  WITH CHECK ADD  CONSTRAINT [FK_dbo.Cidade_dbo.Estado_EstadoId] FOREIGN KEY([EstadoId])
--REFERENCES [dbo].[Estado] ([Id])
--ON DELETE CASCADE
--GO

--ALTER TABLE [dbo].[Cidade] CHECK CONSTRAINT [FK_dbo.Cidade_dbo.Estado_EstadoId]
--GO
-------------------------------------------------------------------------------------
--USE [Biblioteca]
--GO

--/****** Object:  Table [dbo].[Cliente]    Script Date: 03/06/2016 21:11:12 ******/
--SET ANSI_NULLS ON
--GO

--SET QUOTED_IDENTIFIER ON
--GO

--SET ANSI_PADDING ON
--GO

--CREATE TABLE [dbo].[Cliente](
--	[Id] [int] IDENTITY(1,1) NOT NULL,
--	[Nome] [varchar](100) NOT NULL,
--	[CPF] [varchar](14) NOT NULL,
--	[DataNascimento] [date] NOT NULL,
--	[Sexo] [varchar](1) NOT NULL,
--	[Telefone] [varchar](20) NULL,
--	[Email] [varchar](50) NOT NULL,
--	[CidadeId] [int] NOT NULL,
--PRIMARY KEY CLUSTERED 
--(
--	[Id] ASC
--)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
--) ON [PRIMARY]

--GO

--SET ANSI_PADDING OFF
--GO

--ALTER TABLE [dbo].[Cliente]  WITH CHECK ADD FOREIGN KEY([CidadeId])
--REFERENCES [dbo].[Cidade] ([Id])
--GO



