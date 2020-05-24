import { ProductService } from './../Service/ProductService.ts';
import { ErrorHandler } from './../Service/middleware.ts';
const productService = new ProductService()

export const fetchAllProduct = async ({ response }: { response: any }) => {
    try {
      const fetchedProducts = await productService.getAllProduct();
      response.body = {
        success: true,
        data: fetchedProducts
        }
    } catch (error) {
      throw new ErrorHandler(error.message, error.status || 500);
    }
  };

  export const insertProduct = async ({ response }: { response: any }) => {
    try {
      const fetchedProducts = await productService.getAllProduct();
      response.body = {
        success: true
        }
    } catch (error) {
      throw new ErrorHandler(error.message, error.status || 500);
    }
  };