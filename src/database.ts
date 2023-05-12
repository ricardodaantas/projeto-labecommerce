import { 
    TUser, 
    TProduct, 
    TPurchase, 
    ProductCategory} from "./types"

export const user: TUser[] = [
    {
        id: "01",
        email: "batatinha@gmail.com.br",
        password: "batatinhaQuente123"
    },
    {
        id: "02",
        email: "bananinha@gmail.com.br",
        password: "bananinhaAmassadaQdlc"        
    }
]


export const product: TProduct[] = [
    {
        id: "01",
        name: "batatinha",
        price: 0.25,
        category: ProductCategory.TUBERCULO
    },
    {
        id: "02",
        name: "bananinha",
        price: 0.50,
        category: ProductCategory.FRUTA       
    }
]


export const purchase: TPurchase[] = [
    {
        userId: "01",
        productId: "01",
        quantity: 1,
        totalPrice: 0.25
    },
    {
        userId: "02",
        productId: "01",
        quantity: 2,
        totalPrice: 0.50     
    }
];

// Funções para manipulação de usuários

export function createUser(id: string, email: string, password: string): string {
    user.push({id, email, password})
    return "Cadastro realizado com sucesso"
}

// Função para retornar todos os usuários
export function getAllUsers(): TUser []
 {
    return user
 }

 // Funções para manipulação do produto

 export function createProduct(id: string, name: string, price: number, category: ProductCategory): string {
   product.push({id, name, price, category})
   return "Produto criado com sucesso" 
 }

// Funções para retornar todos os produtos
 export function getAllProducts():TProduct[] {
    return product
 }

 // Função para manipular o ID

 export function getProductById(idToSearch: string): TProduct | undefined {
    return product.find((prod) => prod.id === idToSearch)
 }


// queryProductsByName (busca por produtos baseado em um nome da lista de products)
// input: um parâmetro (q)
// q é a abreviação de query (termo de busca/consulta)
// output: lista de produtos com nomes que contenham o termo de busca
// extra: o resultado da busca deve ser case insensitive


export function queryProductsByName(q: string): TProduct[] {
    return product.filter((prod) => prod.name.toLowerCase().includes(q.toLowerCase()));
  }

// createPurchase (cria uma nova compra na lista de purchases)
// input: quatro parâmetros (userId, productId, quantity e totalPrice)
// output: frase de sucesso ("Compra realizada com sucesso")

export function createPurchase(userId: string, productId: string, quantity: number, totalPrice: number): string {
    purchase.push({userId, productId, quantity, totalPrice});
    return "Compra realizada com sucesso";
  }

// getAllPurchasesFromUserId (busca todas as compras feitas baseado no id do usuário)
// input: userIdToSearch
// output: lista atualizada de compras nas quais o userId delas são do userIdToSearch


export function getAllPurchasesFromUserId(userIdToSearch: string): TPurchase [] {
    return purchase.filter((purchase) => purchase.userId === userIdToSearch);
  }