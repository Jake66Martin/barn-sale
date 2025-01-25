DROP DATABASE IF EXISTS thriftbarnfurniture_db;

CREATE DATABASE thriftbarnfurniture_db;

USE thriftbarnfurniture_db;

CREATE TABLE category (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL UNIQUE
);

CREATE TABLE subcategory (
     id INT AUTO_INCREMENT PRIMARY KEY,
     name VARCHAR(100) NOT NULL,
     category_id INT,
     category_name VARCHAR(100),

     FOREIGN KEY (category_id) REFERENCES category(id),
     FOREIGN KEY (category_name) REFERENCES category(name) ON DELETE CASCADE
);

CREATE TABLE item (
    id INT AUTO_INCREMENT PRIMARY KEY,
    item VARCHAR(100) NOT NULL,
    category_id INT,
    subcategory_id INT,
    item_category VARCHAR(100) NOT NULL,
    item_subcategory VARCHAR(100),
    description VARCHAR(255) NOT NULL,
    price INT NOT NULL,
    location VARCHAR(100) NOT NULL,
    image JSON NOT NULL,
    created_at DATETIME DEFAULT NOW(),

    FOREIGN KEY (category_id) REFERENCES category(id),
    FOREIGN KEY (subcategory_id) REFERENCES subcategory(id)
);

CREATE TABLE user (
   id INT AUTO_INCREMENT PRIMARY KEY,
   email VARCHAR(100) NOT NULL UNIQUE,
   password VARCHAR(100) NOT NULL
);

INSERT INTO category (name)
    VALUES 
    ("LivingRoom"),
    ("DiningRoom"),
    ("Kitchen&Bath"),
    ("Bedroom"),
    ("Child&Nursery"),
    ("Office"),
    ("Garage&Exterior"),
    ("HomeDecor");

INSERT INTO subcategory (name, category_id, category_name)
VALUES 
("Couches&Sofas&Loveseats", 1, "LivingRoom"),
("TV&MediaStand", 1, "LivingRoom"),
("Chairs", 1, "LivingRoom"),
("SideTables", 1, "LivingRoom"),
("CoffeeTables", 1, "LivingRoom"),
("Bookshelfs&StorageSolutions", 1, "LivingRoom"),
("Lamps", 1, "LivingRoom"),
("Mirrors", 1, "LivingRoom"),
("Rugs", 1, "LivingRoom"),
("Benches", 1, "LivingRoom"),
("Electronics", 1, "LivingRoom"),
("Chests", 1, "LivingRoom"),
("DiningTables", 2, "DiningRoom"),
("DiningChairs", 2, "DiningRoom"),
("Hutches&SideBoards", 2, "DiningRoom"),
("CoatRacks", 2, "DiningRoom"),
("FrontEntrance", 2, "DiningRoom"),
("Dressers", 4, "Bedroom"),
("BedsFrames", 4, "Bedroom"),
("Mattresses", 4, "Bedroom")
("NightStands", 4, "Bedroom"),
("Closet", 4, "Bedroom"),
("Armoires", 4, "Bedroom"),
("FilingCabinets", 6, "Office"),
("OfficeChairs", 6, "Office"),
("WallArt", 8, "HomeDecor"),
("Statues&Sculptures", 8, "HomeDecor"),
("Frames", 8, "HomeDecor");


