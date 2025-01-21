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

     FOREIGN KEY (category_id) REFERENCES Category(id),
     FOREIGN KEY (category_name) REFERENCES Category(name) ON DELETE CASCADE
);

CREATE TABLE Item (
    id INT AUTO_INCREMENT PRIMARY KEY,
    item VARCHAR(100) NOT NULL,
    category_id INT,
    subcategory_id INT,
    item_category VARCHAR(100) NOT NULL,
    item_subcategory VARCHAR(100),
    description VARCHAR(100) NOT NULL,
    price INT NOT NULL,
    location VARCHAR(100) NOT NULL,
    image VARCHAR(100) NOT NULL,
    created_at DATETIME DEFAULT NOW(),

    FOREIGN KEY (category_id) REFERENCES Category(id),
    FOREIGN KEY (subcategory_id) REFERENCES Subcategory(id)
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
    ("HomeDecor");

INSERT INTO Subcategory (name, category_id, category_name)
VALUES 
("Couches&Sofas&Loveseats", 1, "LivingRoom"),
("TV&MediaStand", 1, "LivingRoom"),
("Chairs", 1, "LivingRoom"),
("SideTables", 1, "LivingRoom"),
("CoffeeTables", 1, "LivingRoom"),
("Bookselfs&StorageSolutions", "1", "LivingRoom"),
("Lamps", 1, "LivingRoom"),
("Mirrors", 1, "LivingRoom"),
("DiningSets", 2, "DiningRoom"),
("DiningTables", 2, "DiningRoom"),
("DiningChairs", 2, "DiningRoom"),
("Hutches&Side Boards", 2, "DiningRoom"),
("Dressers", 4, "Bedroom"),
("Beds&Mattresses", 4, "Bedroom"),
("NightStands", 4, "Bedroom");


