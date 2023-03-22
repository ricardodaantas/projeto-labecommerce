import { TProduct, TPurchase, TUser } from "./types";

export const users:TUser[] = [
    {
        id: "u001",
        email: "user1@email.com",
        password: "123456"
    },
    {
        id: "u002",
        email: "user2@email.com",
        password: "abcdef"
    }
]

export const products:TProduct[] = [
    {
        id: "p001",
        name: "macarrão",
        price: 10.5,
        category: "Massa"
    },
    {
        id: "p002",
        name: "arroz",
        price: 3,
        category: "Categoria"
    }
]

export const purchase: TPurchase[] = [
    {
        userId: "u001",
        productId: "p002",
        quantify: 5,
        totalPrice: 15
    },
    {
        userId: "u002",
        productId: "p002",
        quantify: 3,
        totalPrice: 9
    }
]