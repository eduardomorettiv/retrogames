DROP DATABASE if exists atividade;
CREATE DATABASE atividade;
USE atividade;

CREATE TABLE jogos(
    id int not null primary key auto_increment,
    nome varchar(100) not null,
    plataforma varchar(100) not null,
    desenvolvedora varchar(100) not null,
    imagem varchar(100) not null,
    preco decimal(10,2) not null,
   created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

insert into jogos(nome, plataforma, desenvolvedora, imagem, preco) values
("Doom", "Computador", "id Software", "https://sm.ign.com/ign_br/screenshot/default/doom-alt-boxart00_cat3.jpg", 40.00),
("Sonic", "SegaDrive", "Sega", "https://upload.wikimedia.org/wikipedia/en/b/ba/Sonic_the_Hedgehog_1_Genesis_box_art.jpg?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=original", 60.00),
("Mario", "Nintendo Console", "Nintendo", "https://upload.wikimedia.org/wikipedia/pt/0/06/Super-Mario-World.jpg?utm_source=pt.wikipedia.org&utm_campaign=index&utm_content=original", 70.00);