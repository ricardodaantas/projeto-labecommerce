"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllPurchasesFromUserId = exports.createPurchase = exports.queryProductsByName = exports.getProductById = exports.getAllProducts = exports.createProduct = exports.getAllUsers = exports.createUser = exports.a = exports.product = exports.user = void 0;
const types_1 = require("./types");
exports.user = [
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
];
exports.product = [
    {
        id: "01",
        name: "batatinha",
        price: 0.75,
        category: types_1.ProductCategory.TUBERCULO
    },
    {
        id: "02",
        name: "bananinha",
        price: 0.93,
        category: types_1.ProductCategory.FRUTA
    }
];
exports.a = [
    {
        userId: "01",
        productId: "01",
        quantity: 1,
        totalPrice: 0.75
    },
    {
        userId: "02",
        productId: "01",
        quantity: 2,
        totalPrice: 1.50
    }
];
function createUser(id, email, password) {
    exports.user.push({ id, email, password });
    return "Cadastro realizado com sucesso";
}
exports.createUser = createUser;
function getAllUsers() {
    return exports.user;
}
exports.getAllUsers = getAllUsers;
function createProduct(id, name, price, category) {
    exports.product.push({ id, name, price, category });
    return "Produto criado com sucesso";
}
exports.createProduct = createProduct;
function getAllProducts() {
    return exports.product;
}
exports.getAllProducts = getAllProducts;
function getProductById(idToSearch) {
    return exports.product.find((prod) => prod.id === idToSearch);
}
exports.getProductById = getProductById;
function queryProductsByName(q) {
    return exports.product.filter((prod) => prod.name.toLowerCase().includes(q.toLowerCase()));
}
exports.queryProductsByName = queryProductsByName;
function createPurchase(userId, productId, quantity, totalPrice) {
    exports.a.push({ userId, productId, quantity, totalPrice });
    return "Compra realizada com sucesso";
}
exports.createPurchase = createPurchase;
function getAllPurchasesFromUserId(userIdToSearch) {
    return exports.a.filter((purchase) => purchase.userId === userIdToSearch);
}
exports.getAllPurchasesFromUserId = getAllPurchasesFromUserId;
//# sourceMappingURL=database.js.map