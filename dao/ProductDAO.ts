import db from '../DB-service/db-mongo-connect.ts'

export class ProductDao{
    protected productCollection:any;
    constructor(){
        const database = db.getDatabase;
        this.productCollection = database.collection('product'); 
    }

    createProduct(){
        return this.productCollection.insertOne({
            name:"myproduct",
            quantity:5
        })
    }
    getAllProduct(){
        return this.productCollection.findOne();
    }
    getProductById(){

    }
    deleteAllProduct(){

    }
    deleteProductById(){

    }
}