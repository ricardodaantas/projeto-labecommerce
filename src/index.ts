import {
  user,
  product,
  purchase,
  createUser,
  getAllUsers,
  createProduct,
  getAllProducts,
  getProductById,
  queryProductsByName,
  createPurchase,
  getAllPurchasesFromUserId,
} from "./database";
import { ProductCategory, TProduct, TPurchase, TUser } from "./types";
import express, { Request, Response } from "express";
import cors from "cors";
import { db } from "./database/knex";

const app = express();

app.use(express.json());
app.use(cors());

console.time();
console.log("Eu sou um bolinho de arroz");

console.table(user);
console.table(product);
// console.table(purchase)
// console.log(user, product, purchase)

// Testar a função de criação de usuario

console.log(createUser("03", "Pedrinho@labenu.com", "pedrinhodeJó"));

// Função para buscar todos os usuarios

console.table(getAllUsers());

// Testar a função de criação do produto

console.log(createProduct("03", "chicória", 0.9, ProductCategory.LEGUMES));

// Função para buscar todos os produtos

console.table(getAllProducts());

// Função para buscar por ID

console.log(getProductById("03"));

// exemplo de chamada: queryProductsByName("monitor")
console.log(queryProductsByName("bata"));

// exemplo de chamada: createPurchase("u003", "p004", 2, 1600)
console.log(createPurchase("01", "01", 1, 0.75));

// exemplo de chamada: getAllPurchasesFromUserId("u003")
console.log(getAllPurchasesFromUserId("01"));
console.timeEnd();

// 1º Exercicio - apis-e-express-exercicios

app.listen(3003, () => {
  console.log("Servidor rodando na porta 3003");
});

app.get("/ping", (req: Request, res: Response) => {
  res.send("Pong!");
});

// 2º Exercicio - apis-e-express-exercicios

// Get All Users
// method HTTP (GET)
// path ("/users")
// response
// status 200
// array de users do database.ts

// app.get('/users', (req: Request, res: Response) => {
//     res.status(200).send(user)
//   })

//   Get All Products
//   method HTTP (GET)
//   path ("/products")
//   response
//   status 200
//   array de products do database.ts

// app.get('/products', (req: Request, res: Response) => {
//     res.status(200).send(product)
//   })

//   Search Product by name
//   method HTTP (GET)
//   path ("/product/search")
//   query params
//   q
//   response
//   status 200
//   array do resultado da busca

// app.get('/products/search', (req: Request, res: Response)=>{
//     const q = req.query.q as string

//     const result: TProduct[] = product.filter((product) => product.name.toLowerCase().includes(q.toLowerCase())
//      )

//      res.status(200).send(result)
// })

// 3º Exercicio - apis-e-express-exercicios

// Create User
// method HTTP (POST)
// path ("/users")
// body
// id
// email
// password
// response
// status 201
// "Cadastro realizado com sucesso"

// app.post('/users', (req: Request, res: Response)=>{
//     const id = req.body.id as string
//     const email = req.body.email as string
//     const password = req.body.password as string

//     const newUser: TUser = {
//         id,
//         email,
//         password
//     }

//     user.push(newUser)

//     res.status(201).send("Cadastro realizado com sucesso")
// })

// Create Product
// method HTTP (POST)
// path ("/products")
// body
// id
// name
// price
// category
// response
// status 201
// "Produto cadastrado com sucesso"

// app.post('/products', (req: Request, res: Response)=>{
//     const id = req.body.id as string
//     const name = req.body.name as string
//     const price = req.body.price as number
//     const category = req.body.category as ProductCategory

//     const newProduct: TProduct = {
//         id,
//         name,
//         price,
//         category
//     }

//     product.push(newProduct)

//     res.status(201).send("Produto cadastrado com sucesso")
// })

// Create Purchase
// method HTTP (POST)
// path ("/purchases")
// body
// userId
// productId
// quantity
// totalPrice
// response
// status 201
// "Compra realizada com sucesso"

// app.post('/purchases', (req: Request, res: Response)=>{
//     const userId = req.body.userId as string
//     const productId = req.body.productId as string
//     const quantity = req.body.quantity as number
//     const totalPrice = req.body.totalPrice as number

//     const newPurchase: TPurchase = {
//         userId,
//         productId,
//         quantity,
//         totalPrice
//     }

//     purchase.push(newPurchase);
//     res.status(201).send("Compra realizada com sucesso")
// })

// 4º Exercicio - aprofundamento-express-exercicios

// Get Products by id
// method HTTP (GET)
// path ("/products/:id")
// response
// status 200
// objeto product encontrado

// RESPEITAR A HIERARQUIA

// app.get('/products/:id', (req: Request, res: Response)=>{
//     const id:string = req.params.id;
//     const productsById: TProduct = product.find((prod)=> prod.id === id);
//     res.status(200).send("objeto product encontrado")
// })

// Get User Purchases by User id
// method HTTP (GET)
// path ("/users/:id/purchases")
// response
// status 200
// array de compras do user procurado

// app.get('/users/:id/purchases', (req: Request, res: Response)=>{
//     const userId:string = req.params.id;
//     const getUserPurchasesByUserId: TPurchase = purchase.find((purch)=> purch.userId === userId);
//     res.status(200).send(getUserPurchasesByUserId)
// })

// Delete User by id
// method HTTP (DELETE)
// path ("/users/:id")
// response
// status 200
// "User apagado com sucesso"

// app.delete('/users/:id', (req: Request, res: Response)=>{
//     const id: string = req.params.id;
//     const DeleteUserById:number = user.findIndex((user)=>user.id === id)
//     if(DeleteUserById >=0) {
//         user.splice(DeleteUserById, 1)
//     }

//     res.status(200).send("User apagado com sucesso")
// })

// Delete Product by id
// method HTTP (DELETE)
// path ("/products/:id")
// response
// status 200
// "Produto apagado com sucesso"

// app.delete('/products/:id', (req: Request, res: Response)=>{
//     const id: string = req.params.id;
//     const deleteProductById:number = product.findIndex((product)=>product.id === id)
//     if(deleteProductById >=0) {
//         product.splice(deleteProductById, 1)
//     }
//     res.status(200).send("Produto apagado com sucesso")
// })

// Edit User by id
// method HTTP (PUT)
// path ("/users/:id")
// body
// email (parâmetro opcional)
// password (parâmetro opcional)
// response
// status 200
// "Cadastro atualizado com sucesso"

// app.put('/users/:id', (req: Request, res: Response) =>{
// const id: string = req.params.id
// const newEmail = req.body.email as string | undefined
// const newPassword = req.body.password as string | undefined
// const editUserById: TUser = user.find((user) => user.id === id);
// editUserById.email = newEmail || editUserById.email
// editUserById.password = newPassword || editUserById.password
// res.status(200).send("Cadastro atualizado com sucesso")
//     }
// )
// Edit Product by id
// method HTTP (PUT)
// path ("/products/:id")
// body
// name (parâmetro opcional)
// price (parâmetro opcional)
// category (parâmetro opcional)
// response
// status 200
// "Produto atualizado com sucesso"

// app.put('/products/:id', (req: Request, res: Response) =>{
//     const id: string = req.params.id
//     const newName = req.body.name
//     const newPrice = req.body.price
//     const newCategory = req.body.category
//     const editProductById: TProduct = product.find((product) => product.id === id);
//     editProductById.name = newName || editProductById.name
//     editProductById.price = newPrice || editProductById.price
//     editProductById.category = newCategory || editProductById.category
//     res.status(200).send("Produto atualizado com sucesso")
//         }
//     )

// 5º exercicio - fluxo-de-dados-backend-exercicios

// Get All Users
// não precisa de validação, basta refatorar para o uso do try/catch

// app.get('/users', (req: Request, res: Response) => {
//     try {
//       const users = getAllUsers();
//       res.status(200).send(users);
//     } catch (error) {
//       res.status(500);
//       res.send(error.message)
//     }
//   });

// Get All Products
// não precisa de validação, basta refatorar para o uso do try/catch
//   app.get('/products', (req: Request, res: Response) => {
//     try {
//       const products = getAllProducts();
//       res.status(200).send(products);
//     } catch (error) {
//       console.error(error);
//       res.status(500)
//       res.send(error.message);
//     }
//   });

// Search Product by name
// query params deve possuir pelo menos um caractere

// app.get('/products/search', (req: Request, res: Response) => {

//     try {
//       const q = req.query.q as string;

//       if (!q || q.trim().length < 1) {
//         throw new Error("Query param 'q' deve retornar pelo menos 1 caractere")
//       }

//       const result: TProduct[] = product.filter((product) =>
//         product.name.toLowerCase().includes(q.toLowerCase())
//       );

//       res.status(200).send(result);
//     } catch (error) {
//       console.log(error);
//       res.status(404).send(error.message);
//     }
//   });

//   Create User
//   validar o body
//   extra:
//   não deve ser possível criar mais de uma conta com a mesma id
//   não deve ser possível criar mais de uma conta com o mesmo e-mail

// app.post('/users', (req: Request, res: Response)=>{
//     try{
//     const id = req.body.id as string
//     const email = req.body.email as string
//     const password = req.body.password as string

//     if(!id || !email || !password) {
//         throw new Error("O corpo da requisição deve conter os campos 'id', 'email' e 'password'")
//     }

//     const userExist = user.find(user => user.id === id || user.email === email);

//     if (userExist) {
//         throw new Error("Não é possível criar mais de uma conta com o mesmo ID ou Email")
//     }

//     const newUser: TUser = {
//         id,
//         email,
//         password
//     }

//     user.push(newUser)

//     res.status(200).send("Cadastro realizado com sucesso")
// } catch (error) {
//     console.log(error);
//     res.status(404).send(error.message)
// }
// })
// -----------------------------------------------------------------RESPEITANDO A HIERARQUIA
// Get Products by id
// validar que o produto existe

// app.get('/products/:id', (req: Request, res: Response)=>{
//     try {
//         const id:string = req.params.id;
//         const productById: TProduct = product.find((prod)=> prod.id === id);
//         if (!productById) {
//             throw new Error("Produto não encontrado");
//         }
//         res.status(200).send(productById);
//     } catch (error) {
//         res.status(404).send(error.message);
//     }
// })

// -----------------------------------------------------------------------------------------

// Create Product
// validar o body
// extra:
// não deve ser possível criar mais de um produto com a mesma id

// app.post('/products', (req: Request, res: Response)=>{
//     try{
//     const id = req.body.id as string
//     const name = req.body.name as string
//     const price = req.body.price as number
//     const category = req.body.category as ProductCategory

//     const productExist = product.find((prod) => prod.id === id)

//     if(productExist) {
//         throw new Error("Já existe um produto com esse ID")
//     }

//     const newProduct: TProduct = {
//         id,
//         name,
//         price,
//         category
//     }

//     product.push(newProduct)

//     res.status(200).send("Produto cadastrado com sucesso")
// } catch (error){
//     console.log(error)
//     res.status(404).send(error.message)
// }
// })

// Create Purchase
// validar o body
// extra:
// id do usuário que fez a compra deve existir no array de usuários cadastrados
// id do produto que foi comprado deve existir no array de produtos cadastrados
// a quantidade e o total da compra devem estar com o cálculo correto

// app.post('/purchases', (req: Request, res: Response)=>{
//     try{
//     const userId = req.body.userId as string
//     const productId = req.body.productId as string
//     const quantity = req.body.quantity as number
//     const totalPrice = req.body.totalPrice as number

//     const userExists = user.find((user) => user.id === userId)
//     if(!userExists){
//         throw new Error ("Usuário não cadastrado")
//     }

//     const productExists = product.find((prod) => prod.id === prod.id)
//     if(!productExists){
//         throw new Error ("Produto não cadastrado")
//     }
//     // logica para saber o valor dentro do array - testar para ver se funciona
//     const price = product.find((prod)=> prod.id === productId)?.price
//     if(!price){
//         throw new Error ("Preço não encontrado para o produto")
//     }
//     console.log(price)

//     const calculateTotalPrice = quantity * price;
//     if (totalPrice !== calculateTotalPrice) {
//         throw new Error("o Preço total calculado está incorreto")
//     }

//     const newPurchase: TPurchase = {
//         userId,
//         productId,
//         quantity,
//         totalPrice
//     }

//     purchase.push(newPurchase);
//     res.status(200).send("Compra realizada com sucesso")
// } catch (e) {
//     console.log(e)
//     res.status(404).send(e.message)
// }
// })

// Get User Purchases by User id
// validar que o usuário existe

// app.get('/users/:id/purchases', (req: Request, res: Response)=>{
//     try {
//         const userId:string = req.params.id;
//         const getUserPurchasesByUserId: TPurchase[] = purchase.filter((purch)=> purch.userId === userId);
//         if (getUserPurchasesByUserId.length === 0) {
//             throw new Error("Usuário não encontrado");
//         }
//         res.status(200).send(getUserPurchasesByUserId);
//     } catch (error) {
//         res.status(404).send(error.message);
//     }
// })

// Delete User by id
// validar que o usuário existe

// app.delete('/users/:id', (req: Request, res: Response)=>{
//     try {
//         const id: string = req.params.id;
//         const userIndex: number = user.findIndex((user)=>user.id === id)
//         if(userIndex < 0) {
//             throw new Error("Usuário não encontrado");
//         }
//         user.splice(userIndex, 1)
//         res.status(200).send("Usuário apagado com sucesso");
//     } catch (error) {
//         res.status(404).send(error.message);
//     }
// })

// Delete Product by id
// validar que o produto existe

// app.delete('/products/:id', (req: Request, res: Response)=>{
//     try {
//         const id: string = req.params.id;
//         const productIndex: number = product.findIndex((product)=>product.id === id)
//         if(productIndex < 0) {
//             throw new Error("Produto não encontrado");
//         }
//         product.splice(productIndex, 1)
//         res.status(200).send("Produto deletado com sucesso");
//     } catch (error) {
//         res.status(404).send(error.message);
//     }
// })

// Edit User by id
// validar que o usuário existe
// validar o body

// app.put('/users/:id', (req: Request, res: Response) => {
//     try {
//       const id: string = req.params.id
//       const editUserById: TUser = user.find((user) => user.id === id);

//       if (!editUserById) {
//         throw new Error("Usuário não encontrado")
//       }

//       const newEmail = req.body.email as string | undefined
//       const newPassword = req.body.password as string | undefined

//       if (!newEmail && !newPassword) {
//         throw new Error("Nenhum campo foi enviado para atualização")
//       }

//       if (newEmail) {
//         editUserById.email = newEmail
//       }

//       if (newPassword) {
//         editUserById.password = newPassword
//       }

//       res.status(200).send("Cadastro atualizado com sucesso")
//     } catch (error) {
//       console.log(error)
//       res.status(404).send(error.message)
//     }
//   })

// Edit Product by id
// validar que o produto existe
// validar o body

// app.put('/products/:id', (req: Request, res: Response) => {
//     try {
//         const id: string = req.params.id;
//         const productIndex: number = product.findIndex((product)=>product.id === id)
//         if(productIndex < 0) {
//             throw new Error("Produto não encontrado");
//         }
//         const newProduct: TProduct = req.body;
//         if(!newProduct.id || !newProduct.name || !newProduct.price || !newProduct.category){
//             throw new Error('Preencha todos os campos do produto!');
//         }
//         product[productIndex] = newProduct;
//         res.status(200).send("Produto atualizado com sucesso");
//     } catch (error) {
//         res.status(404).send(error.message);
//     }
// })

// Exerício 1
// Configure seu servidor Express para que ele se comunique com seu banco de dados via knex e refatore (ou recrie) os seguintes endpoints:

// Get All Users
// method HTTP (GET)
// path ("/users")
// response
// status 200
// array de users do arquivo .db
app.get("/users", async (req: Request, res: Response) => {
  try {
    const users = await db.raw(`SELECT * FROM users;`);
    res.status(200).send(users);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
});

// Get All Products
// method HTTP (GET)
// path ("/products")
// response
// status 200
// array de products do arquivo .db
app.get("/products", async (req: Request, res: Response) => {
  try {
    const products = await db.raw(`SELECT * FROM products;`);
    res.status(200).send(products);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
});

// Search Product by name
// method HTTP (GET)
// path ("/product/search")
// query params
// q
// response
// status 200
// array do resultado da busca no arquivo .db

//Get All Products by name
app.get("/products/search", async (req: Request, res: Response) => {
  try {
    const q = req.query.q;
    const sql = `SELECT * FROM products WHERE name LIKE ?;`;
    console.log(sql, [`%${q}%`]);
    const result = await db.raw(sql, [`%${q}%`]);
    console.log(result);
    res.status(200).send(result);
  } catch (error: any) {
    console.log(error.message);
    res.status(400).send(error.message);
  }
});
//Criando novos endpoints

//    Exercício 2
// Apague as tabelas SQL de users, products e purchases e as e crie novamente apenas com as colunas descritas abaixo (são as mesmas colunas que estão nos requisitos finais do projeto).

// Em seguida, refatore (ou recrie) os seguintes endpoints:

// Create User
// method HTTP (POST)
// path ("/users")
// body
// id
// name
// email
// password
// createdAt
// response
// status 201
// "Cadastro realizado com sucesso"
app.post("/users", async (req: Request, res: Response) => {
  try {
    const { id, name, email, password } = req.body;
    if (typeof id !== "string") {
      throw new Error("'id' deve ser do tipo 'string'");
    }
    if (typeof email !== "string") {
      throw new Error("'email' deve ser do tipo 'string'");
    }
    if (typeof password !== "string") {
      throw new Error("'password' deve ser do tipo 'string'");
    }
    const idExist = await db.raw(`SELECT * FROM users WHERE id = ?`, [id]);
    if (idExist.length > 0) {
      throw new Error("Já existe uma conta com esse id");
    }
    const newUser = await db.raw(
      `INSERT INTO users (id, name, email, password) VALUES (?, ?, ?, ?)`,
      [id, name, email, password]
    );
    res.status(200).send({ message: "Cadastro realizado com sucesso!" });
  } catch (error: any) {
    res.status(400).send(error.message);
  }
});
// Create Product
// method HTTP (POST)
// path ("/products")
// body
// id
// name
// price
// description
// imageUrl
// response
// status 201
// "Produto cadastrado com sucesso"
app.post("/products", async (req: Request, res: Response) => {
  try {
    const { id, name, price, description, imageUrl } = req.body;
    if (typeof id !== "string") {
      throw new Error("'id' deve ser do tipo 'string'");
    }
    if (typeof name !== "string") {
      throw new Error("'name' deve ser do tipo 'string'");
    }
    if (typeof price !== "number") {
      throw new Error("'price' deve ser do tipo 'number'");
    }
    if (typeof description !== "string") {
      throw new Error("'description' deve ser do tipo 'string'");
    }
    const idExist = await db("products").select("*").where({ id });
    if (idExist.length > 0) {
      throw new Error("Já existe um produto com esse id");
    }
    await db("products").insert({ id, name, price, description, imageUrl });
    res.status(200).send({ message: "Cadastro realizado com sucesso!" });
  } catch (error) {
    res.status(400).send(error.message);
  }
});

// Create Purchase
// method HTTP (POST)
// path ("/purchases")
// body
// id
// buyer
// totalPrice
// createdAt
// paid
// response
// status 201
// "Compra cadastrada com sucesso"
app.post("/purchases", async (req: Request, res: Response) => {
  try {
    const { id, buyer, totalPrice, createdAt, paid } = req.body;
    console.log(id, buyer, totalPrice, paid);
    if (!id || typeof id !== "string") {
      res.status(400);
      throw new Error("'id' deve ser do tipo 'string'");
    }
    if (isNaN(totalPrice)) {
      res.status(400);
      throw new Error("'o preço deve ser no formato de numeros'");
    }
    const idExist = await db.raw(`
          SELECT * FROM purchases WHERE id = "${id}";
        `);
    if (idExist.length) {
      res.status(400);
      throw new Error("Já existe um um produto com esse id");
    }
    const newPuchases = await db.raw(`
        INSERT INTO purchases(id, buyer, totalPrice, paid)
        VALUES ("${id}", "${buyer}", "${totalPrice}", "${paid}");`);
    res.status(201).send({ message: "Compra cadastrada com sucesso" });
  } catch (error: any) {
    res.status(400).send(error.message);
  }
});
// Get Products by id
// method HTTP (GET)
// path ("/products/:id")
// response
// status 200
// objeto encontrado do arquivo .db

app.get('/products/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const product = await db.raw('SELECT * FROM products WHERE id = ?', id);
    res.status(200).send(product);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// Get User Purchases by User id
// method HTTP (GET)
// path ("/users/:id/purchases")
// response
// status 200
// array de compras do user no arquivo .db

app.get("/users/:id/purchases", async (req, res) => {
  const userId = req.params.id;
  try {
    const userPurchases = await db.raw(`
      SELECT *
      FROM purchases
      WHERE buyer = '${userId}'
    `);
    res.status(200).send(userPurchases[0]);
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Internal server error" });
  }
});

// Exercício 1
// Refatore pelo menos 3 endpoints que você fez em raw para query builder.
//Get All Users
app.get("/users", async (req: Request, res: Response) => {
  try {
    const result = await db.select("*").from("users");
    res.status(200).send({ result });
  } catch (error: any) {
    res.status(400).send(error.message);
  }
});
//Get All Products
app.get("/products", async (req: Request, res: Response) => {
  try {
    const result = await db.select("*").from("products");
    res.status(200).send({ result });
  } catch (error: any) {
    res.status(400).send(error.message);
  }
});
//Get All Products by name
app.get("/products/search", async (req: Request, res: Response) => {
  try {
    const q = req.query.name;
    const result = await db
      .select("*")
      .from("products")
      .where("name", "LIKE", `%${q}%`);
    res.status(200).send({ result });
  } catch (error: any) {
    res.status(400).send(error.message);
  }
});
// Exercício 2
// Crie o seguinte endpoint com query builder:
// Get Purchase by id
// method HTTP (GET)
// path ("/purchases/:id")
// response
// status 200
// um objeto contendo:
// id da compra
// valor total da compra
// quando foi criada
// status do pagamento
// id de quem fez a compra
// email de quem fez a compra
// nome de quem fez a compra

// app.get("/purchases/:id", async(req:Request, res:Response)=>{
//     try {
//         const id = req.params.id
//         const purchase = await db("purchases").where({id}).first();
//         const buyer = await db("users").where({id : purchase.buyer}).first();
//         const infoPurchaseUser = {
//         purchaseId: purchase.id,
//         totalPrice: purchase.totalPrice,
//         createdAt: purchase.createdAt,
//         paid: purchase.paid,
//         buyerId:buyer.id,
//         emailBuyer:buyer.email,
//         nameBuyer: buyer.name
//     }
//         res.status(200).send(infoPurchaseUser);
//     } catch (error: any) {
//         res.status(400).send(error.message)
        
//     }
// })


//Refatore o endpoint criado no exercício anterior para que o resultado bem sucedido também
//retorne a lista de produtos que tem relação com a compra pesquisada.
app.get("/purchases/:id", async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    console.log(`Buscando informações da compra ${id}`);    
    const purchase = await db("purchases")
    .where({ id })
    .first();
    if (!purchase) {
      return res.status(404).send("Compra não encontrada");
    }    
    const buyer = await db("users")
    .where({ id: purchase.buyer })
    .first();
    if (!buyer) {
      return res.status(404).send("Comprador não encontrado");
    }    
    const products = await db("products")
      .join(
        "purchases_products",
        "purchases_products.product_id",
        "products.id"
      )
      .where("purchases_products.purchase_id", id);
    console.log(`Produtos encontrados: ${JSON.stringify(products)}`);    
    const infoPurchaseUser = {
      purchase_id: purchase.id,
      totalPrice: purchase.totalPrice,
      createdAt: purchase.createdAt,
      isPaid: purchase.paid,
      buyerId: buyer.id,
      email: buyer.email,
      name: buyer.name,
      productsList: products
    };
    res.status(200).send(infoPurchaseUser);
  } catch (error: any) {
    console.log(error.message);
    res.status(400).send(error.message);
  }
});

// Edit product by id
// Edita um produto existente.
app.put("/products/:id", async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { name, price, description, imageUrl } = req.body;
    const updatedProduct = await db("products")
      .where({ id })
      .update({ name, price, description, imageUrl });
    if (updatedProduct === 0) {
      return res.status(404).send("Produto não encontrado");
    }
    res.status(200).send({ message: "Produto atualizado com sucesso" });
  } catch (error) {
    console.log(error.message);
    res.status(400).send(error.message);
  }
});

// Delete purchase by id
// Deleta um pedido existente.

// app.delete("/purchase/:id", async (req: Request, res: Response) =>{

//   const { id } = req.params;  
//   try {
//     const result = await db('purchases')
//     .where({ id })
//     .del();

//     if(result === 1) {
//       return res.status(200).send({message: "Pedido cancelado com sucesso"});
//     } else    
//     return res.status(404).send({message: "Produto não encontrado"});
//   }
//  catch (error){    
//     return res.status(500).send({message: "Erro ao cancelar o pedido"});
//  }
//   });

  app.delete('/purchases/:id', async (req, res) => {
    const { id } = req.params;
  
    try {
      const result = await db('purchases')
        .where({ id })
        .del();
  
      if (result === 1) {
        res.status(200).send({ message: 'Pedido cancelado com sucesso' });
      } else {
        res.status(404).send({ error: 'Compra não encontrada' });
      }
    } catch (error) {
      res.status(500).send({ error: 'Erro ao excluir compra' });
    }
  });

