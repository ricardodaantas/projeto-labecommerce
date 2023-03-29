import { products, purchases, users } from "./database"
import express, {Request, Response} from 'express';
import cors from 'cors'
import { CATEGORY, TProduct, TPurchase, TUser } from "./types";

const app = express();

app.use(express.json());
app.use(cors());
 
app.listen(3003, () => {
    console.log("Servidor rodando na porta 3003");
});

// ======================= Users =======================
// Get All Users
app.get("/users", (req: Request, res: Response)=>{
    res.status(200).send(users)
})

// Get Users by id
app.get("/users/:id", (req: Request, res: Response)=>{
    const id = req.params.id

    const result = users.find((user)=> user.id === id)

    res.status(200).send(result)
})

// Create User
app.post("/users", (req: Request, res: Response)=>{
    const id = req.body.id as string
    const email = req.body.email as string
    const password = req.body.password as string

    const newUser:TUser = {id, email, password}
    users.push(newUser)

    res.status(201).send("Cadastro realizado com sucesso")
})

// Delete User by id
app.delete("/users/:id", (req: Request, res: Response)=>{
    const id = req.params.id

    const indexUserToDelete = users.findIndex((user)=> user.id === id)

    if(indexUserToDelete >= 0){
        users.splice(indexUserToDelete, 1)
        res.status(200).send("User apagado com sucesso")
    } else {
        res.status(400).send("User não encontrado")
    }
})

// Edit User by id
app.put("/users/:id", (req: Request, res: Response)=>{
    const id = req.params.id

    const newEmail = req.body.email as string | undefined
    const newPassword = req.body.password as string | undefined

    const usersToEdit = users.find((user)=> user.id === id)

    if(usersToEdit){

        usersToEdit.email = newEmail || usersToEdit.email
        usersToEdit.password = newPassword || usersToEdit.password

        res.status(200).send("User apagado com sucesso")
    } else {
        res.status(400).send("User não encontrado")
    }
})

// ======================= Products =======================

// Get All Products
app.get("/products", (req: Request, res: Response)=>{
    res.status(200).send(products)
})

// Search Product by name
app.get("/products/search", (req: Request, res: Response)=>{
    const q = req.query.q as string

    const result = products.filter((product)=>{
        return product.name === q
    })
    res.status(200).send(result)
})

// Get products by id
app.get("/products/:id", (req: Request, res: Response)=>{
    const id = req.params.id

    const result = products.find((product)=> product.id === id)

    res.status(200).send(result)
})


// Create Product
app.post("/products", (req: Request, res: Response)=>{
    const id = req.body.id as string
    const name = req.body.name as string
    const price = req.body.price as number
    const category = req.body.category as CATEGORY

    const newProduct:TProduct = {id, name, price, category}
    products.push(newProduct)

    res.status(201).send("Produto cadastrado com sucesso")
})


// Edit Product by id
app.put("/products/:id", (req: Request, res: Response)=>{
    const id = req.params.id

    const newName = req.body.name as string | undefined
    const newPrice = req.body.price as number | undefined
    const newCategory = req.body.category as CATEGORY | undefined

    const productsToEdit = products.find((product)=> product.id === id)

    if(productsToEdit){

        productsToEdit.name = newName || productsToEdit.name
        productsToEdit.price = newPrice || productsToEdit.price
        productsToEdit.category = newCategory || productsToEdit.category

        res.status(200).send("produto apagado com sucesso")
    } else {
        res.status(400).send("produto não encontrado")
    }
})

app.delete("/products/:id", (req: Request, res: Response)=>{
    const id = req.params.id

    const indexProductToDelete = products.findIndex((product)=> product.id === id)

    if(indexProductToDelete >= 0){
        products.splice(indexProductToDelete, 1)
        res.status(200).send("Produto apagado com sucesso")
    } else {
        res.status(400).send("Produto não encontrado")
    }
})

// ======================= Purchases =======================

//Get All Purchases
app.get("/purchases", (req: Request, res: Response)=>{
    res.status(200).send(purchases)
})

// Get User Purchases by User id
app.get("/users/:id/purchases", (req: Request, res: Response)=>{
    const id = req.params.id

    const result = purchases.find((purchase)=> purchase.userId === id)

    res.status(200).send(result)
})

// Create Purchase
app.post("/purchases", (req: Request, res: Response)=>{
    const userId = req.body.userId as string
    const productId = req.body.productId as string
    const quantify = req.body.quantity as number
    const totalPrice = req.body.totalPrice as number

    const newPurchase:TPurchase = {userId, productId, quantify, totalPrice}
    purchases.push(newPurchase)

    res.status(201).send("Carrinho cadastrado com sucesso")
})


  
