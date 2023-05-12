-- Active: 1681858236451@@127.0.0.1@3306


CREATE TABLE users (
    id TEXT PRIMARY KEY UNIQUE NOT NULL,
    email TEXT UNIQUE NOT NULL,
    password TEXT NOT NULL 
);



CREATE TABLE products (
    id TEXT PRIMARY KEY UNIQUE NOT NULL,
    name TEXT NOT NULL,
    price REAL NOT NULL,
    category TEXT NOT NULL
);

INSERT INTO products (id, name, price, category)
VALUES
('Pr04', "MORANGO", 0.85, "FRUTAS"),
('Pr05', "ABACATE", 1.05, "FRUTAS"),
('Pr06', "LARANJA", 0.45, "FRUTAS"),
('Pr07', "ABACAXI", 2.80, "FRUTAS"),
('Pr08', "MELÃO", 1.20, "FRUTAS");

-- Get All Users
-- retorna todos os usuários cadastrados
SELECT * FROM users;

-- Get All Products
-- retorna todos os produtos cadastrados
SELECT * FROM products;

-- Search Product by name
-- mocke um termo de busca, por exemplo "monitor"
-- retorna o resultado baseado no termo de busca
SELECT * FROM products
WHERE name LIKE "%O";

-- Create User
-- mocke um novo usuário
-- insere o item mockado na tabela users

INSERT INTO users (id, email, password)
VALUES ('04', "PH@CS2.COM.BR", "AIDENTO");

-- Create Product
-- mocke um novo produto
-- insere o item mockado na tabela products

INSERT INTO products (id, name, price, category)
VALUES ('09', "VINA NÃO É SALSICHA", 0.30, "SALSICHA");

-- Get Products by id
-- mocke uma id
-- busca baseada no valor mockado

SELECT * FROM products
WHERE id = 09;

-- Delete User by id
-- mocke uma id
-- delete a linha baseada no valor mockado

DELETE FROM users
WHERE id = '04';

-- Delete Product by id
-- mocke uma id
-- delete a linha baseada no valor mockado
DELETE FROM products
WHERE id = '09';

-- Edit User by id
-- mocke valores para editar um user
-- edite a linha baseada nos valores mockados

UPDATE users SET password = "AIDENTO2" WHERE id = '04';

-- Edit Product by id
-- mocke valores para editar um product
-- edite a linha baseada nos valores mockados

UPDATE products SET name  = "ECA VINA", category ="VINA NÃO É SALSICHA" WHERE id = '09';

-- Get All Users
-- retorna o resultado ordenado pela coluna email em ordem crescente
SELECT * FROM users
ORDER BY email ASC;

-- Get All Products versão 1
-- retorna o resultado ordenado pela coluna price em ordem crescente
-- limite o resultado em 20 iniciando pelo primeiro item

SELECT * FROM products
ORDER BY price ASC
LIMIT 20;

-- Get All Products versão 2
-- mocke um intervalo de preços, por exemplo entre 100.00 e 300.00
-- retorna os produtos com preços dentro do intervalo mockado em ordem crescente

SELECT * FROM products
WHERE price >= 0.00 AND price <= 2.00
ORDER BY price ASC;

-- Exercício 1
-- Criação da tabela de pedidos
-- nome da tabela: purchases
-- colunas da tabela:
-- id (TEXT, PK, único e obrigatório)
-- total_price (REAL e obrigatório)
-- paid (INTEGER e obrigatório)
-- delivered_at (TEXT e opcional)
-- buyer_id (TEXT, obrigatório e FK = referencia a coluna id da tabela users)
-- Observações
-- A coluna paid será utilizada para guardar uma lógica booleana. O SQLite recomenda o uso do número 0 para false e 1 para true.
-- Os pedidos começam com paid valendo 0 (você irá definir isso quando for popular a tabela com o INSERT).

-- A coluna delivered_at será utilizada para gerenciar a data de entrega do pedido. Ela é opcional, porque sempre começará sem valor ao criar um pedido, ou seja, null.
-- O SQLite recomenda utilizar TEXT para lidar com strings no formato ISO8601 "aaaa-mm-dd hh:mm:sss". Lembre-se da existência da função nativa DATETIME para gerar datas nesse formato.

CREATE TABLE purchases (
    id TEXT PRIMARY KEY UNIQUE NOT NULL,
    total_price REAL NOT NULL,
    paid INTEGER NOT NULL,
    delivered_at TEXT,
    buyer_id TEXT NOT NULL,
    FOREIGN KEY (buyer_id) REFERENCES users (id)
);
-- Exercício 2
-- a) Crie dois pedidos para cada usuário cadastrado
-- No mínimo 4 no total (ou seja, pelo menos 2 usuários diferentes) e devem iniciar com a data de entrega nula.
-- INSERT INTO users (id, email, password)
-- VALUES
-- (01, "ARTHUR@BANANINHA.COM", "LABENU"),
-- (02, "JAZIEL@LABENU.COM", "EUSOUINEVITAVEL"),
-- (03, "GUILHERME@LABENU.COM", "BATATINHA123");
INSERT INTO purchases (id, total_price, paid, delivered_at, buyer_id)
VALUES
('Pu01', 500.7, 1, 0,'1'),
('Pu02', 700.8, 1, 0,'1'),
('Pu03', 200.9, 1, 0,'1'),
('Pu04', 350, 1, 0,'2'),
('Pu05', 400, 1, 0,'2'),
('Pu06', 490, 1, 0,'2'),
('Pu07', 8000, 1, 0,'3'),
('Pu08', 1, 1, 0,'3'),
('Pu09', 35, 1, 0,'3');

-- b) Edite o status da data de entrega de um pedido
-- Simule que o pedido foi entregue no exato momento da sua edição (ou seja, data atual).
UPDATE purchases
SET delivered_at = datetime('now', 'localtime')
WHERE id = 'Pu01';

-- Exercício 3
-- Crie a query de consulta utilizando junção para simular um endpoint de histórico de compras de um determinado usuário.
-- Mocke um valor para a id do comprador, ela deve ser uma das que foram utilizadas no exercício 2.

SELECT 
purchases.id,
purchases.total_price,
purchases.paid,
purchases.delivered_at,
users.id AS buyer_email
FROM purchases
INNER JOIN users
ON purchases.buyer_id = users.id;

-- Criação da tabela de relações
-- nome da tabela: purchases_products
-- colunas da tabela:
-- purchase_id (TEXT e obrigatório, não deve ser único)
-- product_id (TEXT e obrigatório, não deve ser único)
-- quantity (INTEGER e obrigatório, não deve ser único)
-- Como essa lógica funciona?
-- Cada compra é registrada uma única vez na tabela purchases.
-- Cada produto da mesma compra é registrado uma única vez na tabela purchases_products.
-- Exemplo:

CREATE TABLE purchases_products(
    purchase_id TEXT NOT NULL,
    product_id TEXT NOT NULL,
    quantity INTEGER NOT NULL,
    FOREIGN KEY (purchase_id)
    REFERENCES purchases (id),
    FOREIGN KEY (product_id) 
    REFERENCES products (id)
);
-- uma pessoa coloca 5 laranjas (p001) e 3 bananas (p002) no carrinho e confirma sua compra

-- a compra é registrada com id c001 na tabela purchases

-- a seguir, cada item do carrinho é registrado na tabela purchases_products
-- 5 laranjas são registradas na tabela purchases_products (c001, p001, 5)
-- 3 bananas são registradas na tabela purchases_products (c001, p002, 3)

-- Exercício 2
-- Com a tabela de relações criada podemos finalmente realizar compras no banco de dados!

-- Inserção dos dados
-- Popule sua tabela purchases_products simulando 3 compras de clientes.

-- Consulta com junção INNER JOIN
-- Mostre em uma query todas as colunas das tabelas relacionadas (purchases_products, purchases e products).

INSERT INTO purchases_products (purchase_id, product_id, quantity)
VALUES
('Pu01', 'Pr04', '4'),
('Pu04', 'Pr05', '5'),
('Pu07', 'Pr06', '6');

SELECT purchases_products.*, purchases.*, products.*
FROM purchases_products
INNER JOIN purchases ON purchases_products.purchase_id = purchases.id
INNER JOIN products ON purchases_products.product_id = products.id;


-- Exercício 3
-- Conforme evoluímos no conhecimento em SQL e SQLite, e também no contexto do negócio (e-commerce), percebemos algumas falhas ao longo do processo. Utilize esse tempo para refatorar sua modelagem.

-- Lembre-se que o recomendado no SQLite acerca de edição de tabelas é a recriação do zero.
-- Ainda bem que você não deletou suas queries antigas, não é mesmo?

-- A vantagem em estarmos utilizando o SQLite é que você não precisa deletar todo o trabalho já feito, basta criar um novo arquivo .db e começar de novo por ele.

CREATE Table users(
id TEXT PRIMARY KEY NOT NULL UNIQUE,
name TEXT NOT NULL,
email TEXT NOT NULL UNIQUE,
password TEXT NOT NULL,
createdAt TEXT NOT NULL DEFAULT (DATETIME())
);

INSERT INTO users (id, name, email, password) VALUES 
('Us001', 'Jaziel Bury', 'JazielBury@labenu.com', 'password123'),
('Us002', 'Arthur Felix', 'ArthurFelix@labenu.com', 'password456'),
('Us003', 'Pedro Henrique', 'PedroHenrique@labenu.com', 'password789');

SELECT * FROM users;
DROP TABLE users;

--Recriando a tabela de Products
CREATE Table products(
id TEXT PRIMARY KEY NOT NULL UNIQUE,
name TEXT NOT NULL UNIQUE,
price REAL NOT NULL,
description TEXT NOT NULL,
imageUrl TEXT NOT NULL
);

INSERT INTO products (id, name, price, description, imageUrl) VALUES 
('Pr004', 'MORANGO', 0.85, 'Frutas vermelhas são ótimas fontes de vitamina C.', 'https://fsp.usp.br/eccco/wp-content/uploads/2022/09/sviatoslav-huzii-I497Uc8xWXQ-unsplash-scaled-e1664885131928-1200x951.jpg'),
('Pr005', 'ABACATE', 1.05, 'O abacate é rico em gorduras saudáveis e nutrientes.', 'https://www.saudeemdia.com.br/antigas/uploads/abacate_beneficios_widexl.jpg'),
('Pr006', 'LARANJA', 0.45, 'As laranjas são uma excelente fonte de vitamina C.', 'https://minhasaude.proteste.org.br/wp-content/uploads/2022/10/muitas-laranjas.png'),
('Pr007', 'ABACAXI', 2.80, 'O abacaxi é rico em vitamina C e bromelina.', 'https://boomi.b-cdn.net/wp-content/uploads/2022/06/11-beneficios-do-abacaxi-para-a-saude.png'),
('Pr008', 'MELÃO', 1.20, 'O melão é uma excelente fonte de água e antioxidantes.', 'https://agricolafamosa.com.br/wp-content/uploads/2017/03/galia-1.png');

SELECT * FROM products;
DROP TABLE products;
--Recriando a tabela Purchases
CREATE TABLE purchases(
    id TEXT PRIMARY KEY UNIQUE NOT NULL,
    buyer TEXT NOT NULL,
    totalPrice REAL NOT NULL,
    createdAt TEXT NOT NULL DEFAULT (datetime()),
    paid INTEGER NOT NULL DEFAULT '0',
    FOREIGN KEY (buyer) REFERENCES users(id)
);
INSERT INTO purchases (id, buyer, totalPrice, createdAt, paid) VALUES 
('Pu001', 'Us001', 2.70, datetime('now', 'localtime'), 1),
('Pu002', 'Us002', 3.15, datetime('now', 'localtime'), 0),
('Pu003', 'Us003', 1.35, datetime('now', 'localtime'), 1),
('Pu004', 'Us002', 4.50, datetime('now', 'localtime'), 0),
('Pu005', 'Us003', 2.70, datetime('now', 'localtime'), 1);

SELECT * FROM purchases;
DROP TABLE purchases;

CREATE TABLE purchases_products(
    purchase_id TEXT NOT NULL,
    product_id TEXT NOT NULL,
    quantity INTEGER NOT NULL DEFAULT '1',
    FOREIGN KEY (purchase_id) 
    REFERENCES purchases(id),
    FOREIGN KEY (product_id) 
    REFERENCES products(id)
);
INSERT INTO purchases_products (purchase_id, product_id, quantity)
VALUES 
  ('Pu001', 'Pr004', 1),
  ('Pu002', 'Pr001', 1),
  ('Pu003', 'Pr002', 1),
  ('Pu002', 'Pr006', 1),
  ('Pu003', 'Pr004', 1),
  ('Pu001', 'Pr005', 2);

SELECT 
  pp.purchase_id, 
  p.buyer, 
  pr.name, 
  pr.price, 
  pp.quantity, 
  pp.quantity * pr.price AS total_price
FROM purchases_products pp
JOIN purchases p ON p.id = pp.purchase_id
JOIN products pr ON pr.id = pp.product_id;

DROP TABLE purchases_products;