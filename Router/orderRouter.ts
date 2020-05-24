import { Router } from "https://deno.land/x/oak/mod.ts";

const orderRouter = new Router()
orderRouter.get("/order",context => {
        context.response.body = "My order";
})

export default orderRouter