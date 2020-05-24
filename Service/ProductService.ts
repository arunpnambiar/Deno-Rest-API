import { ProductDao } from './../dao/ProductDAO.ts';

export class ProductService{
    productDao :any;
    constructor(){
        this.productDao = new ProductDao()
    }
    getAllProduct(){
        return this.productDao.getAllProduct();
    }

    createProduct(){
        return this.productDao.createProduct();
    }

}