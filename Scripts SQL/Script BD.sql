

--CREATE DATABASE Biblioteca

--USE [Biblioteca]
--GO

--/****** Object:  Table [dbo].[Estado]    Script Date: 31/05/2016 22:35:44 ******/
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

--USE [Biblioteca]
--GO

--/****** Object:  Table [dbo].[Cidade]    Script Date: 31/05/2016 22:36:18 ******/
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

--create table Cliente(
--	Id	int identity primary key,
--	Nome	varchar(100) not null,
--	CPF		varchar(14) not null,
--	Telefone	varchar(20),
--	Email		varchar(50) not null,
--	CidadeId	int not null,
--	FOREIGN KEY (Cidadeid) REFERENCES Cidade(Id)
--

--create table Livro(
--	Id	int identity primary key,
--	Titulo	varchar(100) not null,
--	AnoPublicacao	int not null
--);
