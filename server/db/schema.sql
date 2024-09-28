DROP DATABASE IF EXISTS thriftbarnfurniture_db;

CREATE DATABASE thriftbarnfurniture_db;

USE thriftbarnfurniture_db;

CREATE TABLE Category (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL UNIQUE
);

CREATE TABLE Subcategory (
     id INT AUTO_INCREMENT PRIMARY KEY,
     name VARCHAR(100) NOT NULL,
     category_id INT,
     category_name VARCHAR(100),

     FOREIGN KEY (category_id) REFERENCES category(id),
     FOREIGN KEY (category_name) REFERENCES category(name) ON DELETE CASCADE
);

CREATE TABLE Item (
    id INT AUTO_INCREMENT PRIMARY KEY,
    item VARCHAR(100) NOT NULL,
    category_id INT,
    subcategory_id INT,
    item_category VARCHAR(100) NOT NULL,
    item_subcategory VARCHAR(100) NOT NULL,
    description VARCHAR(100) NOT NULL,
    price INT NOT NULL,
    location VARCHAR(100) NOT NULL,
    image VARCHAR(100) NOT NULL,

    FOREIGN KEY (category_id) REFERENCES category(id),
    FOREIGN KEY (subcategory_id) REFERENCES subcategory(id)
);

CREATE TABLE User (
   id INT AUTO_INCREMENT PRIMARY KEY,
   email VARCHAR(100) NOT NULL UNIQUE,
   password VARCHAR(100) NOT NULL
);

INSERT INTO Category (name)
    VALUES 
    ("LivingRoom"),
    ("DiningRoom"),
    ("Kitchen&Bath"),
    ("Bedroom"),
    ("Child&Nursery"),
    ("Office"),
    ("Garage&Exterior"),
    ("HomeDecor")

INSERT INTO Subcategory (name, category_id, category_name)
VALUES 
("Couches & Sofas & Loveseats", "1", "LivingRoom"),
("TV & Media Stand", "1", "LivingRoom"),
("Chairs", "1", "LivingRoom"),
("Side Tables", "1", "LivingRoom"),
("Coffee Tables", "1", "LivingRoom"),
("Bookselfs & Storage Solutions", "1", "LivingRoom"),
("Lamps", "1", "LivingRoom"),
("Mirrors", "1", "LivingRoom"),
("Dining Sets", "2", "DiningRoom"),
("Dining Tables", "2", "DiningRoom"),
("Dining Chairs", "2", "DiningRoom"),
("Hutches & Side Boards", "2", "DiningRoom"),
("Dressers", "4", "Bedroom"),
("Beds & Mattresses", "4", "Bedroom"),
("Night Stands", "4", "Bedroom");
