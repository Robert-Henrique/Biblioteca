

--CREATE DATABASE Biblioteca

--create table Cliente(
--	Id	int identity primary key,
--	Nome	varchar(100) not null,
--	Telefone	varchar(20),
--	Email		varchar(50) not null
--);


--create table PessoaFisica(
--	Id	int identity primary key,
--	CPF		varchar(14) not null,
--	ClienteId	int not null,
--	foreign key (Id) References Cliente(Id)
--);

--create table PessoaJuridica(
--	Id	int identity primary key,
--	CNPJ		varchar(18) not null,
--	ClienteId	int not null,
--	foreign key (Id) References Cliente(Id)
--);

--create table Livro(
--	Id	int identity primary key,
--	Titulo	varchar(100) not null,
--	AnoPublicacao	int not null
--);

--create table Aluguel(
--	Id	int identity primary key,
--	ClienteId int not null,
--	LivroId		int not null,
--	Data	Datetime not null,
--	foreign key (ClienteId) References Cliente(Id),
--	foreign key (LivroId) References Livro(Id)
--)