USE thriftbarnfurniture_db;

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