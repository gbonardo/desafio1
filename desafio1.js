class ProductManager {
    constructor() {
        this.products = []
    }
    addProduct(product) {
        const prod = this.products.find(prod => prod.code === product.code)
        if (prod) {
            console.log("El producto existe.")
        } else {
            this.products.push(product)
        }
    }

    getProducts() {
        console.log(this.products)
    }

    getProductsByid(id) {
        const prod = this.products.find(prod => prod.id === id)
        if (prod) {
            console.log(prod)
        } else {
            console.log("El producto no existe.")
        }
    }
}


class Product {
    constructor(title, description, price, thumbnail, code, stock) {
        this.id = Product.incrementarId()
        this.title = title
        this.description = description
        this.price = price
        this.thumbnail = thumbnail
        this.code = code
        this.stock = stock
    }

    static incrementarId() {
        if (this.idIncrementar) {
            this.idIncrementar++
        } else {
            this.idIncrementar = 1
        }
        return this.idIncrementar
    }

}

const producto1 = new Product("Mouse Logitech", "Modelo M170 Color Negro", "6000", [], "A001INFOPERI", "30")
const producto2 = new Product("Mouse Genius", "Modelo DX-120 Color Negro", "3000", [], "A001INFOPERI", "15" )
const producto3 = new Product("Teclado Logitech", "Modelo K380 Color Negro", "10000", [], "A002INFOPERI", "20" )
const producto4 = new Product("Teclado Genius", "Modelo Slimstar Q200 Color Negro", "6000", [], "A002INFOPERI", "25" )
const producto5 = new Product("Monitor Dell", "Modelo P2433G Color Negro y Plateado", "300000", [], "A003INFOPERI", "20" )
const producto6 = new Product("Notebook Dell", "Modelo Inspiron Color Negro", "500000", [], "A001INFONOTE", "10" )

const productManager = new ProductManager()


productManager.addProduct(producto1)
productManager.addProduct(producto2)
productManager.addProduct(producto3)
productManager.addProduct(producto4)
productManager.addProduct(producto5)
productManager.addProduct(producto6)

productManager.getProducts()

productManager.getProductsByid(6)
