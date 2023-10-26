create database dripstore;
use dripstore;
create table Products (
	id mediumint primary key auto_increment,
	name varchar(50),
    price decimal(10,2)
);
CREATE TABLE Categories (
    id mediumint primary key auto_increment,
    name varchar(50)
);

CREATE TABLE product_category (
	id mediumint auto_increment,
    products_id MEDIUMINT,
    categories_id MEDIUMINT,
    primary key (id),
    FOREIGN KEY (products_id) REFERENCES Products(id),
	  FOREIGN KEY (categories_id) REFERENCES Categories(id)
    );

CREATE VIEW ProductsAndCategories AS
SELECT
    P.name AS product_name,
    P.price AS product_price,
    C.name AS category_name
FROM
    Products AS P
JOIN
    Product_Category AS PC ON P.id = PC.products_id
JOIN
    Categories AS C ON PC.categories_id = C.id;
