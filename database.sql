create database dripstore;
use dripstore;
create table Products (
	id mediumint primary key auto_increment,
	name varchar(50),
    price decimal(10,2)
);

create table categories (
    id mediumint primary key auto_increment,
    name varchar(50)
);

create table product_category (
	id mediumint auto_increment,
    products_id MEDIUMINT,
    categories_id MEDIUMINT,
    primary key (id),
    foreign key (products_id) references Products(id),
	  foreign key (categories_id) references Categories(id)
    );

create view ProductsAndCategories as
select
    P.name as product_name,
    P.price as product_price,
    C.name as category_name
from
    Products as P
join
    Product_Category as PC on P.id = PC.products_id
join
    Categories as C on PC.categories_id = C.id;
