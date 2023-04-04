-- Active: 1680630892141@@127.0.0.1@3306
CREATE TABLE users(
    id TEXT PRIMARY KEY UNIQUE NOT NULL,
    email TEXT UNIQUE NOT NULL,
    password TEXT NOT NULL
);

CREATE TABLE products(
    id TEXT PRIMARY KEY UNIQUE NOT NULL,
    name TEXT NOT NULL,
    price REAL NOT NULL,
    category TEXT NOT NULL
);

INSERT INTO users 
VALUES
    ("u001", "user1@email.com", "123456"),
    ("u002", "user2@email.com", "abcdef");

INSERT INTO products 
VALUES
    ("p001", "Arroz", 5.90, "Grão"),
    ("p002", "macarrão", 10.50, "massa"),
    ("p003", "feijão", 6.20, "Grão"),
    ("p004", "suco", 9.64, "bebidas"),
    ("p005", "maça", 2.12, "frutas");

SELECT * FROM users;
SELECT * FROM products;