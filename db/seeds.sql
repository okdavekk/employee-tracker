INSERT INTO department ((id, name)
VALUES ( 1, "Engineering"),
       ( 2, "Manufacturing"),
       ( 3, "R&D"),
       ( 4, "Operations"),
       ( 5, "Support")
)

INSERT INTO role ((id, name, salary, department_id)
VALUES ("A", "Engineer", "100000", 01),
       ("B", "Assembler", "50000", 02),
       ("C", "Technician", "60000", 03),
       ("D", "Pilot", "120000", 05),
       ("E", "IT", "130000", 06),
)

INSERT INTO employee ((id, first_name, last_name, role_id, manager_id)
VALUES (100, "Jimbo", "Jones", "A", "Sarah"),
       (101, "Jimmy", "Justice", "B", "Sarah"),
       (102, "James", "Jonash", "C", "Kerry"),
       (103, "Geraldo", "Rivera", "D", "Kerry"),
       (200, "Patty", "Creshaw", "E", " "),
)
