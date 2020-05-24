import { fetchAllProduct,insertProduct } from './../controller/productController.ts';
import { Router } from "https://deno.land/x/oak/mod.ts";
import {  Context } from "https://deno.land/x/abc@v1.0.0-rc2/mod.ts";
const productRouter = new Router()

productRouter.get("/product",fetchAllProduct)
              .post("/product",insertProduct)
export default productRouter