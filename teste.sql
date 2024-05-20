CREATE table endereco(
    id integer primary key autoincrement, 
    rua varchar(15),
    numero int,
    cidade_id integer, 
    FOREIGN KEY (cidade_id) REFERENCES cidade(id)
);