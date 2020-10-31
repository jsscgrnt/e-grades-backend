-- create database egrades;
use egrades;
CREATE TABLE IF NOT EXISTS alunos (
    idAluno INT AUTO_INCREMENT,
    nome VARCHAR(255) NOT NULL,
    idade INT NOT NULL,
    email VARCHAR(255) NOT NULL,
    senha VARCHAR(255) NOT NULL,
    uf VARCHAR(2) NOT NULL,
    escola VARCHAR(255) NOT NULL,
    anoEscolar INT NOT NULL,
    PRIMARY KEY (idAluno)
);