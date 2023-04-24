// user
// É a pessoa cliente cadastrada.
export type TUser = {
id: string,
email: string,
password: string
}

// product
// É o produto cadastrado.
export type TProduct = {
id: string,
name: string,
price: number,
category: ProductCategory
}

//2- utilize um enum para definir pelo menos 3 categorias (você pode escolher, mas deixamos alguns exemplos abaixo)
// ACCESSORIES = "Acessórios",
// CLOTHES_AND_SHOES = "Roupas e calçados",
// ELECTRONICS = "Eletrônicos"

export enum ProductCategory {
    FRUTA = "fruta",
    TUBERCULO = "tubérculo",
    LEGUMES = "legumes"
}

// purchase
// É a compra realizada por cliente.
export type TPurchase = {
userId: string,
productId: string,
quantity: number,
totalPrice: number
} 
