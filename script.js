"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const uuid_1 = require("uuid");
class Item {
    constructor(name, price, description) {
        this.id = (0, uuid_1.v4)();
        this.name = name;
        this.price = price;
        this.description = description;
    }
    getId() {
        return this.id;
    }
    getName() {
        return this.name;
    }
    getPrice() {
        return this.price;
    }
    getDescription() {
        return this.description;
    }
}
class User {
    constructor(name, age) {
        this.id = (0, uuid_1.v4)();
        this.name = name;
        this.age = age;
        this.cart = [];
    }
    getId() {
        return this.id;
    }
    getName() {
        return this.name;
    }
    getAge() {
        return this.age;
    }
    addToCart(item) {
        this.cart.push(item);
    }
    removeFromCart(item) {
        this.cart = this.cart.filter((cartItem) => cartItem.getId() !== item.getId());
    }
    removeQuantityFromCart(item, quantity) {
        let remainingQuantity = quantity;
        this.cart = this.cart.filter((cartItem) => {
            if (cartItem.getId() === item.getId() && remainingQuantity > 0) {
                remainingQuantity--;
                return false;
            }
            return true;
        });
    }
    cartTotal() {
        return this.cart.reduce((total, item) => total + item.getPrice(), 0);
    }
    printCart() {
        console.log(`User's Cart:`);
        this.cart.forEach((item) => {
            console.log(`- ${item.getName()}: $${item.getPrice()}`);
        });
        console.log(`Total: $${this.cartTotal()}`);
    }
}
class Shop {
    constructor() {
        this.items = [
            new Item('Milk', 5, 'A carton of Milk'),
            new Item('Eggs', 6, 'A carton of eggs'),
            new Item('Bundle of bananas', 1, 'A large bundle of bananas')
        ];
    }
    getItems() {
        return this.items;
    }
}
const shop = new Shop();
const user = new User('John', 30);
const itemsAvailable = shop.getItems();
user.addToCart(itemsAvailable[0]);
user.addToCart(itemsAvailable[1]);
user.addToCart(itemsAvailable[2]);
user.printCart();
