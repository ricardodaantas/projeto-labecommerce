import { products, purchase, users } from "./database"
import express, {Request, Response} from 'express';
import cors from 'cors'
import { CATEGORY, TProduct, TPurchase, TUser } from "./types";

const app = express();

//configuração do middleware que garante que nossas respostas estejam sempre
//no formato json 👇🏽
app.use(express.json());

//configuração do middleware que habilita o CORS 👇🏽
app.use(cors());

//colocando nosso servidor para escutar a porta 3003 da nossa máquina (primeiro 
//parâmetro da função listen)
//a função de callback (segundo parâmetro da função listen) serve para sabermos 
//que o servidor está de pé, através do console.log que imprimirá a mensagem no 
//terminal 👇🏽
 
app.listen(3003, () => {
    console.log("Servidor rodando na porta 3003");
});

//Users
app.get("/users", (req: Request, res: Response)=>{
    res.status(200).send(users)
})

app.post("/users", (req: Request, res: Response)=>{
    const id = req.body.id as string
    const email = req.body.email as string
    const password = req.body.password as string

    const newUser:TUser = {id, email, password}
    users.push(newUser)

    res.status(201).send("Cadastro realizado com sucesso")
})

// Products
app.get("/products", (req: Request, res: Response)=>{
    res.status(200).send(products)
})

app.get("/products/search", (req: Request, res: Response)=>{
    const q = req.query.q as string

    const result = products.filter((product)=>{
        return product.name === q
    })
    res.status(200).send(result)
})

app.post("/products", (req: Request, res: Response)=>{
    const id = req.body.id as string
    const name = req.body.name as string
    const price = req.body.price as number
    const category = req.body.category as CATEGORY

    const newProduct:TProduct = {id, name, price, category}
    products.push(newProduct)

    res.status(201).send("Produto cadastrado com sucesso")
})


//Purchase
app.get("/purchases", (req: Request, res: Response)=>{
    res.status(200).send(purchase)
})

app.post("/purchases", (req: Request, res: Response)=>{
    const userId = req.body.userId as string
    const productId = req.body.productId as string
    const quantify = req.body.quantity as number
    const totalPrice = req.body.totalPrice as number

    const newPurchase:TPurchase = {userId, productId, quantify, totalPrice}
    purchase.push(newPurchase)

    res.status(201).send("Carrinho cadastrado com sucesso")
})


  
