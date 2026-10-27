DROP DATABASE if exists atividade;
CREATE DATABASE atividade;
USE atividade;

CREATE TABLE jogos(
    id int not null primary key auto_increment,
    titulo varchar(100) not null,
    plataforma varchar(100) not null,
    desenvolvedora varchar(100) not null,
    imagem_url varchar(100) not null,
    preco decimal(10,2) not null,
    data_cadastro datetime not null
);

insert into jogos(titulo, plataforma, desenvolvedora, imagem_url, preco, data_cadastro) values
("Doom", "Computador", "id Software", "https://sm.ign.com/ign_br/screenshot/default/doom-alt-boxart00_cat3.jpg", "40.00", "27-10-2026");
("Sonic", "SegaDrive", "Sega", "https://img.utdstc.com/icon/233/e5c/233e5caa47cc99b061845311c1374b327e37c4c2dbf175d03e2f338a75ff89c5:600", "60.00", "28-09-1992");
("Sonic", "SegaDrive", "Sega", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROe51FCLGRIZZ_eef0D12o3PXAUGFyztR192Sz1SA0LLAWF1nAQ2fyeA_e&s=10", "70.00", "15-05-1995");