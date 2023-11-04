create database dripstore;
use dripstore;
create table Products (
	id mediumint primary key auto_increment,
	name varchar(50),
  price decimal(2)
)

create table Users (
  id mediumint primary key auto_increment,
  name varchar(50),
  email varchar(50),
  cpf varchar(11),
  phone varchar(13),
)
