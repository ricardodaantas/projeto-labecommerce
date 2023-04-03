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
    try {
        
        res.status(200).send(users)

    } catch(error: any) {
        console.log(error) // print do erro no terminal para facilitar o debug
		res.status(400).send(error.message)
    }
})

// Get Users by id
app.get("/users/:id", (req: Request, res: Response)=>{
    try{
        const id = req.params.id

        const result = users.find((user)=> user.id === id)

        res.status(200).send(result)

    } catch(error: any) {
        console.log(error) // print do erro no terminal para facilitar o debug
        res.status(400).send(error.message)
    }
})

// Create User
app.post("/users", (req: Request, res: Response)=>{
    try{
        
        const id = req.body.id
        const email = req.body.email
        const password = req.body.password

        // validar o body
        if(typeof id !== "string"){
            throw new Error("'id' deve ser uma string")
        }
        if(typeof email !== "string"){
            throw new Error("'email' deve ser uma string")
        }
        if(typeof password !== "string"){
            throw new Error("'password' deve ser uma string")
        }
        if (!password.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\da-zA-Z]).{8,12}$/g)) {
			throw new Error("'password' deve possuir entre 8 e 12 caracteres, com letras maiúsculas e minúsculas e no mínimo um número e um caractere especial")
		}
        
        //não deve ser possível criar mais de uma conta com a mesma id
        const resultId = users.find((user)=> user.id === id)
        if(resultId){
            throw new Error("não deve ser possível criar mais de uma conta com a mesma id")
        }

        //não deve ser possível criar mais de uma conta com o mesmo e-mail
        const resultEmail = users.find((user)=> user.email === email)
        if(resultEmail){
            throw new Error("não deve ser possível criar mais de uma conta com o mesmo e-mail")
        }

        const newUser:TUser = {id, email, password}
        users.push(newUser)

        res.status(201).send("Cadastro realizado com sucesso")

    } catch(error: any) {
        console.log(error) // print do erro no terminal para facilitar o debug
        res.status(400).send(error.message)
    }
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
    try{
        res.status(200).send(products)
    } catch(error: any) {
        console.log(error) // print do erro no terminal para facilitar o debug
        res.status(400).send(error.message)
    }
})

// Search Product by name
app.get("/products/search", (req: Request, res: Response)=>{
    try {
        const q = req.query.q

        if(typeof q !== "string"){
            throw new Error("'q' deve ser uma string")
        }

        const result = products.filter((product)=>{
            return product.name === q
        })
        res.status(200).send(result)

    }catch(error: any){
        console.log(error) // print do erro no terminal para facilitar o debug
		res.status(400).send(error.message)
    }

})

// Get products by id
app.get("/products/:id", (req: Request, res: Response)=>{
    const id = req.params.id

    const result = products.find((product)=> product.id === id)

    res.status(200).send(result)
})


// Create Product
app.post("/products", (req: Request, res: Response)=>{
    try{
        const id = req.body.id
        const name = req.body.name
        const price = req.body.price
        const category = req.body.category as CATEGORY

        if(typeof id !== "string"){
            throw new Error("'password' deve ser uma string")
        }
        if(typeof name !== "string"){
            throw new Error("'name' deve ser uma string")
        }
        if(typeof price !== "number"){
            throw new Error("'price' deve ser uma number")
        }
        // if(typeof category !== CATEGORY){
        //     throw new Error("'price' deve ser uma number")
        // }
        
        //não deve ser possível criar mais de um produto com a mesma id
        const resultId = products.find((product)=> product.id === id)
        if(resultId){
            throw new Error("não deve ser possível criar mais de uma conta com a mesma id")
        }

        const newProduct:TProduct = {id, name, price, category}
        products.push(newProduct)

        res.status(201).send("Produto cadastrado com sucesso")
    }catch(error:any){
        console.log(error) // print do erro no terminal para facilitar o debug
		res.status(400).send(error.message)
    }
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
    try{
        const userId = req.body.userId
        const productId = req.body.productId
        const quantify = req.body.quantity
        const totalPrice = req.body.totalPrice

        //validar body
        if(typeof userId !== "string"){
            throw new Error("'userId' deve ser uma string")
        }
        if(typeof productId !== "string"){
            throw new Error("'productId' deve ser uma string")
        }
        if(typeof quantify !== "number"){
            throw new Error("'quantify' deve ser uma number")
        }
        if(typeof totalPrice !== "number"){
            throw new Error("'totalPrice' deve ser uma number")
        }

        //EXTRA
        const resultIdUser = users.find((user)=> user.id === userId)
        if(!resultIdUser){
            throw new Error("id do usuário que fez a compra deve existir no array de usuários cadastrados")
        }

        const resultIdProduct = users.find((user)=> user.id === userId)
        if(!resultIdProduct){
            throw new Error("id do produto que fez a compra deve existir no array de produtos cadastrados")
        }
        
        const resultPrice = products.find((poduct)=> poduct.id === userId)
        if(resultPrice){        //posso colocar só no if de baixo com um && antes da primeira comparação e tirar esse if
            if(resultPrice.price * quantify !== totalPrice){
                throw new Error("a quantidade e o total da compra devem estar com o cálculo correto")
            }
        }



        const newPurchase:TPurchase = {userId, productId, quantify, totalPrice}
        purchases.push(newPurchase)

        res.status(201).send("Carrinho cadastrado com sucesso")
    }catch(error:any){
        console.log(error) // print do erro no terminal para facilitar o debug
		res.status(400).send(error.message)
    }
})


  
